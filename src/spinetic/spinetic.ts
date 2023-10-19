import { useRef, useEffect, useState, Children } from "react";
import { useDragSpinetic } from "./spinetic-use-drag";
import * as SpineticUtils from "./spinetic-utils";
import * as SpineticConfig from "./spinetic-config-validation";
import { TypesUseSpinetic, TypesReturnSpinetic, TypesConfig, TypesConfigOptional } from "types"

export const useSpinetic = ({ children, config }: TypesUseSpinetic
): TypesReturnSpinetic => {
  const spineticMain = useRef<HTMLDivElement>(null);
  const spineticContainer = useRef<HTMLDivElement>(null);

  const [currentConfig, setCurrentConfig] = useState<TypesConfig>(SpineticConfig.validConfig(config));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [remainingIndexes, setRemainingIndexes] = useState<number[]>([]);

  const [_carouselItemsWidths, setCarouselItemsWidths] = useState<number[]>([]);
  const [_isProcessingClick, setIsProcessingClick] = useState(true);
  const [_initialWindowWidth, setInitialWindowWidth] = useState(window?.innerWidth);

  useEffect(() => _setConfigs(config), [config]) // <<<< [temp]: TODO: to change in the storybook
  useEffect(() => _handleItemChange(), [remainingIndexes, currentIndex]);
  useEffect(() => _setConfigs(config), [children, _initialWindowWidth]);
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
          const newIndex = prevIndex + 1;
          return newIndex >= remainingIndexes.length ? 0 : newIndex;
        });
      }, currentConfig.msPerAutoRotate);

      return () => clearInterval(autoRotateIntervalId);
    }
  }, [remainingIndexes]);


  const _handleResize = (): void => {
    if (_initialWindowWidth !== window?.innerWidth) {
      setInitialWindowWidth(window?.innerWidth);
      _setConfigs(config);
    }
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
    setCurrentIndex(0)

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

    setRemainingIndexes(Array.from(
      { length: maxScrollIndex + 1 },
      (_, index) => index + numVisibleCards
    ));

    const hasDraggable = currentConfig.draggable && remainingIndexes?.length > 1
    spineticContainer.current?.classList.toggle("hasDraggable", hasDraggable);

    if (totalWidth <= spineticMain?.current!.offsetWidth) {
      _setCarouselContainerTransform(0);
    } else {
      _setCarouselContainerTransform(scrollAmount);
    }
  }

  const _getCarouselItemsWidth = (): number[] => {
    const carouselItems: NodeListOf<HTMLElement> | null =
      spineticContainer.current?.querySelectorAll(".spinetic-item") ?? null;

    const mainWidth = spineticMain.current!.offsetWidth;
    const containerHeight = spineticContainer.current?.offsetHeight;
    const widths: number[] = [];

    if (carouselItems !== null) {
      carouselItems.forEach((item: HTMLElement) => {

        if (currentConfig.autoWidth) {
          widths.push(item.offsetWidth)
          item.style.width = "";

        } else {
          widths.push(mainWidth / currentConfig.showItems);

          item.style.width = mainWidth / currentConfig.showItems + "px";
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

  const _hasClickTransitionCtrl = (additionalConditionalForTransition: boolean): boolean => {
    return currentConfig.clickTransitionCtrl ?
      _isProcessingClick && additionalConditionalForTransition :
      additionalConditionalForTransition;
  }

  const _hasPreviousItem = currentIndex > 0;
  const previousItem = (): void => {
    if (_hasClickTransitionCtrl(_hasPreviousItem)) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const _hasNextItem = currentIndex < remainingIndexes?.length - 1;
  const nextItem = (): void => {
    if (_hasClickTransitionCtrl(_hasNextItem)) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const maxCarouselItems = Children.count(children);
  const _isValidIndex = (index: number): boolean => {
    return index >= 0 && index < maxCarouselItems;
  }
  const goToItem = (index: number): void => {
    if (_hasClickTransitionCtrl(_isValidIndex(index))) {
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