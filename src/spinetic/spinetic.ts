import { useRef, useEffect, useState, Children, useCallback } from "react";
import { useDragSpinetic } from "./spinetic-use-drag";
import * as SpineticUtils from "./spinetic-utils";
import * as SpineticConfig from "./spinetic-config-validation";
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

  const [_carouselItemsWidths, setCarouselItemsWidths] = useState<number[]>([]);
  const [_isProcessingClick, setIsProcessingClick] = useState(true);
  const [_initialWindowWidth, setInitialWindowWidth] = useState(window?.innerWidth);
  const [_sb, setSb] = useState<boolean | undefined>(undefined)

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

  useEffect(() => checkIsSb(), []);
  useEffect(() => { if (_sb) _setConfigs(config)}, [config, _sb]);

  useEffect(() => _setConfigs(config), [children, _initialWindowWidth]);
  useEffect(() => _handleItemChange(), [remainingIndexes, currentIndex]);

  useEffect(() => { if (!!change && remainingIndexes?.length > 0)change(elementsChange)}, [currentIndex]);

  useEffect(() => {
    _setConfigs(config);
    window.removeEventListener('resize', _handleResize);
    window.addEventListener('resize', _handleResize);

    return () => window.removeEventListener('resize', _handleResize);
  }, [spineticContainer.current?.offsetWidth, _initialWindowWidth, window?.innerWidth]);

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

  const _handleResize = (): void => {
    if (_initialWindowWidth !== window?.innerWidth) {
      setInitialWindowWidth(window?.innerWidth);
      _setConfigs(config);
    }
  }


  const checkIsSb = () => {
    const currentUrl = window?.location?.href;
    const hasStoreInSS = !!sessionStorage?.getItem("@storybook/manager/store");
    const hasStoreInLS = !!localStorage?.getItem("@storybook/manager/store");

    const isSb = currentUrl?.includes("docs") || hasStoreInSS || hasStoreInLS;

    return setSb(isSb)
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

    if (currentOrDefaultConfig.verticalAlign) {
      const updatedConfig = {
        ...currentOrDefaultConfig,
        arrows: false,
        dots: false,
        draggable: false,
        fullHeightItems: false,
      };

      setCurrentConfig(SpineticConfig.validConfig(updatedConfig));
      _setCarouselWidth();
    } else {
      setCurrentConfig(SpineticConfig.validConfig(currentOrDefaultConfig));
      _setCarouselWidth();
    }
  }

  const _setCarouselWidth = (): void => {
    _getCarouselItemsWidth()
    const totalWidth = SpineticUtils.sumCarouselItemsWidths(
      _carouselItemsWidths
    );

    spineticMain.current?.classList.toggle("spinetic-vertical-align", currentConfig.verticalAlign);

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

    if (elementsChange?.current?.remainingIndexes !== currentRemainingIdx) setCurrentIndex(0);

    const hasDraggable = currentConfig.draggable && remainingIndexes?.length > 1
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

    if (carouselItems !== null) {
      carouselItems.forEach((item: HTMLElement, i) => {

        const defaultAutoWidth = config.autoWidth ?? false
        const autoWidth = _sb ? defaultAutoWidth : currentConfig.autoWidth;
        if (autoWidth) {
          widths.push(item.offsetWidth)
          item.style.width = "";

        } else {
          const showItems = _sb ? SpineticConfig.validShowItems(config.showItems ?? 1) : currentConfig.showItems;

          widths.push(mainWidth / showItems);

          item.style.width = mainWidth / showItems + "px";
        }

        if (currentConfig.fullHeightItems) {
          window?.requestAnimationFrame(() => {
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