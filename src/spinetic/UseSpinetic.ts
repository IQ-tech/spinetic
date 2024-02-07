import { useRef, useEffect, useState, Children, useCallback, ReactNode } from "react";
import { useDragSpinetic } from "./SpineticUseDrag";
import * as SpineticUtils from "./SpineticUtils";
import * as SpineticConfig from "./SpineticConfigValidation";
import { TypesUseSpinetic, TypesReturnSpinetic, TypesConfig, TypesConfigOptional, SpineticChangeEvent } from "types"

export const useSpinetic = ({
  children,
  config = SpineticConfig._defaultConfig,
  change }: TypesUseSpinetic
): TypesReturnSpinetic => {

  const spineticMain = useRef<HTMLDivElement>(null);
  const spineticContainer = useRef<HTMLDivElement>(null);

  const [currentConfig, setCurrentConfig] = useState<TypesConfig>(SpineticConfig.validConfig(config));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [remainingIndexes, setRemainingIndexes] = useState<number[]>([]);
  const [childrenCrl, setChildrenCrl] = useState<ReactNode | ReactNode[]>([]);

  const [_carouselItemsWidths, setCarouselItemsWidths] = useState<number[]>([]);
  const [_isProcessingClick, setIsProcessingClick] = useState(true);
  const [_initialWindowWidth, setInitialWindowWidth] = useState(window?.innerWidth);
  const [_sb, setSb] = useState<boolean | undefined>(undefined);

  const [elementsChange, setElementsChange] = useState<SpineticChangeEvent>({
    previous: {
      index: currentIndex,
      remainingIndexes: remainingIndexes,
      totalItems: Children.count(children)
    },
    current: {
      index: currentIndex,
      remainingIndexes: remainingIndexes,
      totalItems: Children.count(children)
    }
  })



  const checkIsSb = () => {
    const currentUrl = window?.location?.href;
    const hasStoreInSS = !!sessionStorage?.getItem("@storybook/manager/store");
    const hasStoreInLS = !!localStorage?.getItem("@storybook/manager/store");

    const isSb = currentUrl?.includes("docs") || hasStoreInSS || hasStoreInLS;

    return setSb(isSb);
  }

  const _setConfigs = (config?: TypesConfigOptional) => {
    const currentOrDefaultConfig: TypesConfig = SpineticConfig.validConfig(config);

    const breakpoints = currentOrDefaultConfig.responsive
      ? [...currentOrDefaultConfig.responsive.map((item) => item.breakpoint)]
      : [];

    const screenWidth = window?.innerWidth;

    breakpoints.forEach((breakpoint, i) => {
      if (screenWidth <= breakpoint) {
        const responsiveCurrentSettings =
          currentOrDefaultConfig?.responsive[i]?.settings;

        Object.keys(responsiveCurrentSettings).forEach((key) => {
          currentOrDefaultConfig[key as keyof TypesConfigOptional] =
            responsiveCurrentSettings[key as keyof TypesConfigOptional] as never;
        });
      }
    });

    setCurrentConfig(SpineticConfig.validConfig(currentOrDefaultConfig));
    _setCarouselWidth();
  }

  const _setCarouselWidth = (): void => {
    _getCarouselItemsWidth()
    const totalWidth = SpineticUtils.sumCarouselItemsWidths(
      _carouselItemsWidths
    );

    const sbConfig = _sb ? SpineticConfig.validConfig(config) : SpineticConfig._defaultConfig;

    const verticalAlign = _sb ? sbConfig.verticalAlign : currentConfig.verticalAlign;
    spineticMain.current?.classList.toggle("spinetic-vertical-align", verticalAlign);

    let numVisibleCards = 0;
    let totalVisibleWidth = 0;
    let maxScrollIndex = 0;

    _carouselItemsWidths.some((width) => {
      totalVisibleWidth += width;

      if (totalVisibleWidth <= spineticMain?.current!.offsetWidth) {
        numVisibleCards++;
      } else return width;
    });

    maxScrollIndex = Math.max(0, Children.count(children) - numVisibleCards);

    let scrollToIndex = currentIndex;
    let scrollAmount = 0;

    const scrollSum = (carouselItemsWidths: number[]) => {
      carouselItemsWidths.forEach((width: number, index: number) => {
        if (index < scrollToIndex) {
          scrollAmount += width;
        }
      });
    };

    if (scrollToIndex > maxScrollIndex) {
      scrollToIndex = maxScrollIndex;
      scrollAmount = totalWidth - spineticMain?.current!.offsetWidth;
    } else {
      scrollSum(_carouselItemsWidths);
    }

    const currentRemainingIdx = Array.from(
      { length: maxScrollIndex + 1 },
      (_, index) => index + numVisibleCards
    )

    _updateElementsChange({
      current: {
        index: 0,
        remainingIndexes: currentRemainingIdx,
        totalItems: Children.count(children),
      },
      previous: {
        index: 0,
        remainingIndexes: currentRemainingIdx,
        totalItems: Children.count(children)
      }
    });

    setRemainingIndexes(currentRemainingIdx);

    const remainingidxIsEquals = SpineticUtils.arraysAreEqual(
      elementsChange?.current?.remainingIndexes,
      currentRemainingIdx)

    if (!remainingidxIsEquals) setCurrentIndex(0);

    const draggable = _sb ? sbConfig.draggable : currentConfig.draggable;

    const hasDraggable = draggable && remainingIndexes?.length > 1
    spineticContainer.current?.classList.toggle("hasDraggable", hasDraggable);

    if (totalWidth <= spineticMain?.current!.offsetWidth) {
      _setCarouselContainerTransform(0);
    } else {
      _setCarouselContainerTransform(scrollAmount);
    }
  };

  const _getCarouselItemsWidth = (): number[] => {
    const carouselItems: NodeListOf<HTMLElement> | null =
      spineticContainer.current?.querySelectorAll(".spinetic-item") ?? null;

    const mainWidth = spineticMain.current!.offsetWidth;
    const containerHeight = spineticContainer.current?.offsetHeight;
    const widths: number[] = [];

    const sbConfig = _sb ? SpineticConfig.validConfig(config) : SpineticConfig._defaultConfig;

    if (carouselItems !== null) {
      carouselItems.forEach((item: HTMLElement, i) => {

        const autoWidth = _sb ? sbConfig.autoWidth : currentConfig.autoWidth;
        if (autoWidth) {
          widths.push(item.offsetWidth)
          item.style.width = "";

        } else {
          const showItems = _sb ? sbConfig.showItems : currentConfig.showItems;
          widths.push(mainWidth / showItems);
          item.style.width = mainWidth / showItems + "px";
        }

        const fullHeightItems = _sb ? sbConfig.fullHeightItems : currentConfig.fullHeightItems;

        if (fullHeightItems) {
          window.requestAnimationFrame(() => {
            item.style.height = containerHeight + "px";
          });
        } else {
          item.style.height = "";
        }
      });
    }

    setCarouselItemsWidths(widths);
    return widths;
  }

  const _updateElementsChange = (updateElements: SpineticChangeEvent) => {
    setElementsChange((prevElementsChange: SpineticChangeEvent) => {
      return {
        previous: {
          ...prevElementsChange.previous,
          ...updateElements.previous
        },
        current: {
          ...prevElementsChange.current,
          ...updateElements.current
        }
      };
    });
  }

  const _hasClickTransitionCtrl = (additionalConditionalForTransition: boolean): boolean => {
    return currentConfig.clickTransitionCtrl ?
      _isProcessingClick && additionalConditionalForTransition :
      additionalConditionalForTransition;
  }

  const _hasPreviousItem = currentIndex > 0;
  const previousItem = (): void => {
    if (_hasClickTransitionCtrl(_hasPreviousItem)) {
      const newIdx = currentIndex - 1

      _updateElementsChange({
        current: { ...elementsChange.current, index: newIdx },
        previous: { ...elementsChange.previous, index: currentIndex }
      });

      setCurrentIndex(newIdx);
    }
  }

  const _hasNextItem = currentIndex < remainingIndexes?.length - 1;
  const nextItem = (): void => {
    if (_hasClickTransitionCtrl(_hasNextItem)) {
      const newIdx = currentIndex + 1;

      _updateElementsChange({
        current: { ...elementsChange.current, index: newIdx },
        previous: { ...elementsChange.previous, index: currentIndex }
      });

      setCurrentIndex(newIdx);
    }
  }

  const maxCarouselItems = Children.count(children);
  const _isValidIndex = (index: number): boolean => {
    return index >= 0 && index < maxCarouselItems;
  }

  const goToItem = (index: number): void => {
    if (_hasClickTransitionCtrl(_isValidIndex(index))) {

      _updateElementsChange({
        current: { ...elementsChange.current, index: index },
        previous: { ...elementsChange.previous, index: currentIndex }
      });

      setCurrentIndex(index);
    }
  }

  const _setCarouselContainerTransform = (scrollAmount: number): void => {
    spineticContainer.current!.style.transform = `translateX(${scrollAmount}px)`;
  }

  const _handleItemChange = (): void => {
    setIsProcessingClick(false);

    const scrollAmount = SpineticUtils.calculateScrollAmount(
      _carouselItemsWidths,
      currentIndex
    );
    _setCarouselContainerTransform(scrollAmount);

    setTimeout(() => {
      setIsProcessingClick(true);
    }, currentConfig.msPerClicks);
  }

  const { start, move, end } = useDragSpinetic({
    _sb,
    config,
    currentConfig,
    remainingIndexes,
    spineticContainer,
    _carouselItemsWidths,
    currentIndex,
    _setCarouselContainerTransform,
    previousItem,
    nextItem,
    _handleItemChange
  })

  useEffect(() => checkIsSb(), []);
  useEffect(() => _setConfigs(config), [_initialWindowWidth]);
  useEffect(() => _handleItemChange(), [remainingIndexes, currentIndex]);

  useEffect(() => { if (_sb) _setConfigs(config) }, [config, _sb]);
  useEffect(() => { if (!!change && remainingIndexes?.length > 1) change(elementsChange) }, [currentIndex]);
  useEffect(() => {
    if (!SpineticUtils.arraysAreEqual(childrenCrl, children)) {
      _setConfigs(config);
      setChildrenCrl(children);
    }
  }, [children]);


  useEffect(() => {
    if (currentConfig.autoRotate) {
      const autoRotateIntervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIdx = prevIndex + 1;
          const currentIndex = newIdx >= remainingIndexes.length ? 0 : newIdx;

          _updateElementsChange({
            current: { ...elementsChange.current, index: currentIndex },
            previous: { ...elementsChange.previous, index: prevIndex }
          });

          return currentIndex
        });
      }, currentConfig.msPerAutoRotate);

      return () => clearInterval(autoRotateIntervalId);
    }
  }, [remainingIndexes, currentConfig.autoRotate]);

  useEffect(() => {
    _setConfigs(config);
    window.removeEventListener('resize', _handleResize);
    window.addEventListener('resize', _handleResize);

    return () => window.removeEventListener('resize', _handleResize);
  }, [spineticContainer.current?.offsetWidth, _initialWindowWidth, window?.innerWidth]);


  const _handleResize = (): void => {
    if (_initialWindowWidth !== window?.innerWidth) {
      setInitialWindowWidth(window?.innerWidth);
      _setConfigs(config);
    }
  }

  return {
    currentConfig,
    currentIndex,
    spineticMain,
    spineticContainer,
    maxCarouselItems,
    remainingIndexes,
    goToItem,
    previousItem,
    nextItem,

    start,
    move,
    end
  };

}