import { useRef, useEffect, useState, Children, useCallback, ReactNode, RefObject } from "react";

import * as D from "../helpers/defaults"
import * as T from "types"
import * as U from "../helpers/utils";
import * as V from "../helpers/validator";

import { useDrag } from "./useDrag";


export const useSpinetic = ({
  children,
  config = D._defaultConfig,
  change }: T.TypesUseSpinetic
): T.TypesReturnSpinetic => {

  const [_sb] = useState<boolean>(U.isSBEnv());
  
  const spineticMain: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const spineticContainer: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const prevChildren = useRef<ReactNode | ReactNode[]>(children);

  const [currentConfig, setCurrentConfig] = useState<T.TypesConfig>(V.validConfig(config));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(1)
  const [remainingIndexes, setRemainingIndexes] = useState<number[]>([]);

  const [_carouselItemsWidths, setCarouselItemsWidths] = useState<number[]>([]);
  const [_isProcessingClick, setIsProcessingClick] = useState<boolean>(true);

  const [elementsChange, setElementsChange] = useState<T.TypesSpineticChangeEvent>(D.elementsChangeDefault)


  const _handleCarouselItemsWidth = useCallback((CConfig: T.TypesConfig): number[] | null => {
    const container = spineticContainer.current;
    const main = spineticMain.current;

    if (!container || !main) return null;

    const carouselItems: NodeListOf<HTMLElement> | null = container.querySelectorAll(".spinetic-item");
    const { autoWidth, showItems, fullHeightItems } = CConfig;
    const widths: number[] = [];

    if (carouselItems !== null) {
      carouselItems?.forEach((item: HTMLElement) => {
        if (autoWidth) {
          widths.push(item.offsetWidth);
          item.style.width = "";
        } else {
          widths.push(main.offsetWidth / showItems);
          item.style.width = main.offsetWidth / showItems + "px";
        }

        if (fullHeightItems) {
          window.requestAnimationFrame(() => {
            item.style.height = container.offsetHeight + "px";
          });
        } else {
          item.style.height = "";
        }
      });
    };

    setCarouselItemsWidths(widths);

    return widths;
  }, [
    remainingIndexes,
    prevChildren.current,
    config,
    currentConfig,
    spineticMain.current,
    spineticContainer.current,
    children
  ])

  const _handleCarouselWidth = useCallback((CConfig: T.TypesConfig): void => {
    if (CConfig.layout === "vertical-align") return;

    _handleCarouselItemsWidth(CConfig)
    const totalWidth = U.sumCarouselItemsWidths(
      _carouselItemsWidths
    );

    let numVisibleCards = 0;
    let totalVisibleWidth = 0;
    let maxScrollIndex = 0;

    const spineticMainWidth = spineticMain?.current?.offsetWidth ?? 0;

    _carouselItemsWidths.some((width) => {
      totalVisibleWidth += width;

      if (totalVisibleWidth <= spineticMainWidth) {
        numVisibleCards++;
        setVisibleItems(numVisibleCards)
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
      scrollAmount = totalWidth - spineticMainWidth;
    } else {
      scrollSum(_carouselItemsWidths);
    }

    const { groupScroll, groupItemsScroll } = CConfig;

    const nItemsScroll = groupItemsScroll > 1 && groupItemsScroll <= numVisibleCards ? groupItemsScroll : numVisibleCards
    const idxScrollPage = Math.ceil(U.validateNumber(maxScrollIndex / nItemsScroll))
    const maxScroll = children?.length > 0 && groupScroll ? idxScrollPage : maxScrollIndex;
    const remainingIdx = (index: number) => groupScroll ? (index + 1) * numVisibleCards : (index + numVisibleCards) - 1;

    const currentRemainingIdx = Array.from(
      { length: maxScroll + 1 },
      (_, index) => remainingIdx(index)
    )

    _updateElementsChange({
      current: {
        index: 0,
        remainingIndexes: currentRemainingIdx,
        totalItems: Children.count(children),
        itemsPerScroll: nItemsScroll
      },
      previous: {
        index: 0,
        remainingIndexes: currentRemainingIdx,
        totalItems: Children.count(children),
        itemsPerScroll: nItemsScroll
      }
    });

    setRemainingIndexes(currentRemainingIdx);

    const remainingidxIsEquals = U.arraysAreEqual(
      elementsChange?.current?.remainingIndexes,
      currentRemainingIdx)

    if (!remainingidxIsEquals) setCurrentIndex(0);

    const hasDraggable = CConfig.draggable && remainingIndexes?.length > 1;
    spineticContainer.current?.classList.toggle("hasDraggable", hasDraggable);

    const offsetWidth = spineticMain?.current?.offsetWidth ?? 0;
    if (totalWidth <= offsetWidth) {
      _setCarouselContainerTransform(0);
    } else {
      _setCarouselContainerTransform(scrollAmount);
    }
  }, [
    remainingIndexes,
    prevChildren.current,
    config,
    currentConfig,
    spineticMain.current,
    spineticContainer.current,
    children
    ])

  const _handleConfigs = useCallback((config?: T.TypesConfigOptional) => {
    const currentOrDefaultConfig: T.TypesConfig = V.validConfig(config);

    const breakpoints = currentOrDefaultConfig.responsive
      ? [...currentOrDefaultConfig.responsive.map((item) => item.breakpoint)]
      : [];

    const screenWidth = window?.innerWidth;

    breakpoints.forEach((breakpoint, i) => {
      if (screenWidth <= breakpoint) {
        const responsiveCurrentSettings =
          currentOrDefaultConfig?.responsive[i]?.settings;

        Object.keys(responsiveCurrentSettings).forEach((key) => {
          currentOrDefaultConfig[key as keyof T.TypesConfigOptional] =
            responsiveCurrentSettings[key as keyof T.TypesConfigOptional] as never;
        });
      }
    });

    const CConfig = V.validConfig(currentOrDefaultConfig);
    setCurrentConfig(CConfig);
    _handleCarouselWidth(CConfig);
  }, [
    prevChildren.current,
    spineticContainer.current,
    window.innerWidth,

    ...(_sb ? [
      config,
      children,
      currentConfig.layout,
      currentConfig.autoWidth,
      currentConfig.fullHeightItems
    ] : [])
  ])

  const _updateElementsChange = (updateElements: T.TypesSpineticChangeEvent) => {
    setElementsChange((prevElementsChange: T.TypesSpineticChangeEvent) => {
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

  const previousItem = (): void => {
    if (_hasClickTransitionCtrl(currentIndex > 0)) {
      const newIdx = currentIndex - 1

      setCurrentIndex(newIdx);
      _updateElementsChange({
        current: { ...elementsChange.current, index: newIdx },
        previous: { ...elementsChange.previous, index: currentIndex }
      });

    }
  }

  const nextItem = (): void => {
    if (_hasClickTransitionCtrl(currentIndex < remainingIndexes?.length - 1)) {
      const newIdx = currentIndex + 1;

      setCurrentIndex(newIdx);
      _updateElementsChange({
        current: { ...elementsChange.current, index: newIdx },
        previous: { ...elementsChange.previous, index: currentIndex }
      });

    }
  }

  const _isValidIndex = (index: number): boolean => {
    return index >= 0 && index < Children.count(children);
  }

  const goToItem = (index: number): void => {
    if (_hasClickTransitionCtrl(_isValidIndex(index))) {

      setCurrentIndex(index);
      _updateElementsChange({
        current: { ...elementsChange.current, index: index },
        previous: { ...elementsChange.previous, index: currentIndex }
      });

    }
  }

  const _setCarouselContainerTransform = (scrollAmount: number): void => {
    if (currentConfig.layout === "vertical-align") return;

    if (spineticContainer?.current) {
      const { groupScroll, groupItemsScroll } = currentConfig;
      const nItemsScroll = groupItemsScroll > 1 && groupItemsScroll <= visibleItems ? groupItemsScroll : visibleItems
      const scroll = groupScroll ? (scrollAmount * nItemsScroll) : scrollAmount;
      spineticContainer.current.style.transform = `translateX(${scroll}px)`;
    }
  }

  const _handleItemChange = useCallback((): void => {
    setIsProcessingClick(false);

    const scrollAmount = U.calculateScrollAmount(
      _carouselItemsWidths,
      currentIndex
    );

    _setCarouselContainerTransform(scrollAmount);

    setTimeout(() => {
      setIsProcessingClick(true);
    }, currentConfig.msPerClicks);
  }, [remainingIndexes, currentIndex])

  const _handleWhenChangeChildren = useCallback(() => {
    const childrenAreEqual = U.childrenIsEqual(children, prevChildren.current);

    if (!childrenAreEqual) {
      _handleConfigs(config);
      prevChildren.current = children;
    }
  }, [config, children]);

  const _handleAutoRotate = useCallback(() => {
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
  }, [remainingIndexes, currentConfig.autoRotate])

  const { start, move, end } = useDrag({
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

  useEffect(() => _handleAutoRotate(), [_handleAutoRotate]);
  useEffect(() => _handleItemChange(), [_handleItemChange]);
  useEffect(() => { _handleConfigs(config) }, [_handleConfigs]);
  useEffect(() => _handleWhenChangeChildren(), [_handleWhenChangeChildren]);
  useEffect(() => { if (!!change && remainingIndexes?.length > 1) change(elementsChange) }, [currentIndex]);
  useEffect(() => window.addEventListener('resize', () => _handleConfigs(config)), [
    window.innerWidth,
    spineticContainer.current,
    config,
  ]);

  useEffect(() => { if (_sb) _handleConfigs(config) }, [_sb, _handleConfigs]);

  return {
    currentConfig,
    prevChildren,
    currentIndex,
    spineticMain,
    spineticContainer,
    maxCarouselItems: Children.count(children),
    remainingIndexes,
    goToItem,
    previousItem,
    nextItem,

    start,
    move,
    end,
  };

}

