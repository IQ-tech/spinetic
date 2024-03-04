import React, { RefObject, useEffect, useRef, useState } from "react";
import * as T from "types";

const sumWidthElemnt = (el: any) => {
  if (!el) return 0;

  const styleEl = window?.getComputedStyle(el);

  return (
    parseFloat(styleEl.width) +
    parseFloat(styleEl.marginLeft) +
    parseFloat(styleEl.marginRight)
  );
};

const Dots = ({
  currentConfig,
  currentIndex,
  maxCarouselItems,
  remainingIndexes,
  goToItem,
}: T.TypesDots) => {
  const visibleDots = currentConfig.dots && remainingIndexes?.length > 1;
  const numberDotsVisible = 5;
  const hasMaxDots = remainingIndexes?.length > numberDotsVisible && currentConfig.maxDots;

  const dotsMainRef: RefObject<any> = useRef(null);
  const dotsContainerRef: RefObject<any> = useRef(null);

  const [dotsConfig, setDotsConfig] = useState<any>({
    dotWith: undefined,
    dotActiveWidth: undefined,
  });


  const handleScrollDots = () => {
    const currentPosition = remainingIndexes?.indexOf(currentIndex);


    const isFirstItem = currentPosition === 0;
    const isSecondItemOrNext = currentPosition >= 1;
    const isLastItem = currentPosition >= remainingIndexes?.length - 1;

    const wrapperDots = dotsMainRef.current.children[0];

    if (isFirstItem) {
      wrapperDots.style.paddingLeft = "";
    }

    if (isSecondItemOrNext) {
      wrapperDots.style.paddingLeft = `${dotsConfig.dotWidth}px`;
    }

    if (isLastItem) {
      wrapperDots.style.paddingLeft = `${2 * dotsConfig.dotWidth}px`;
    }

    if(hasMaxDots) {
    dotsContainerRef.current.style.transform = `translateX(${
      -currentIndex * dotsConfig.dotWidth
    }px)`;
  }
  };

  useEffect(() => {
    if (dotsMainRef.current && dotsContainerRef.current &&  currentConfig.maxDots) {
      const dotWidth = sumWidthElemnt(dotsContainerRef?.current.children[1]);
      const dotActiveWidth = sumWidthElemnt(
        dotsContainerRef?.current.children[0]
      );

      if (dotWidth > 0 && !dotsConfig.dotWidth) {
        const mainDotsWidth =
          dotActiveWidth + (numberDotsVisible - 1) * dotWidth;

        setDotsConfig({
          dotWidth,
          dotActiveWidth,
          mainDotsWidth,
        });

        dotsMainRef.current.style.width = `${mainDotsWidth}px`;
      }

      handleScrollDots();
    }
  }, [
    remainingIndexes,
    currentIndex,
    dotsMainRef,
    dotsContainerRef,
    dotsConfig,
    currentConfig.maxDots,
    currentConfig.layout
  ]);

  return (
    <>
      {visibleDots && hasMaxDots && (
        <div className="spinetic-dots-main" ref={dotsMainRef}>
          <div className="spinetic-dots-wrapper">
            <div
              ref={dotsContainerRef}
              className="spinetic-dots"
              style={{ ...currentConfig.dotsStyle?.container }}
            >
              {remainingIndexes?.map((_item: number, i: number) => (
                <span
                  className={`spinetic-dot ${
                    i === currentIndex ? "spinetic-dot-active" : ""
                  }`}
                  style={{
                    ...currentConfig.dotsStyle?.dot,
                    ...(i === currentIndex
                      ? currentConfig.dotsStyle?.dotActive
                      : null),
                  }}
                  key={i}
                  onClick={() => goToItem(i)}
                >
                  {currentConfig.itemNumberInDot && (
                    <span className="spinetic-dot-item-number">
                      {i + 1 + (maxCarouselItems - remainingIndexes?.length)}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {visibleDots && !hasMaxDots && (
        <div
          className="spinetic-dots"
          style={{ ...currentConfig.dotsStyle?.container }}
        >
          {remainingIndexes?.map((_item: number, i: number) => (
            <span
              className={`spinetic-dot ${
                i === currentIndex ? "spinetic-dot-active" : ""
              }`}
              style={{
                ...currentConfig.dotsStyle?.dot,
                ...(i === currentIndex
                  ? currentConfig.dotsStyle?.dotActive
                  : null),
              }}
              key={i}
              onClick={() => goToItem(i)}
            >
              {currentConfig.itemNumberInDot && (
                <span className="spinetic-dot-item-number">
                  {i + 1 + (maxCarouselItems - remainingIndexes?.length)}
                </span>
              )}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Dots;
