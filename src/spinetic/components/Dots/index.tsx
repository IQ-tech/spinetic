import React from "react";
import * as T from "types";

import useDots from "./hooks";

const Dots = ({
  currentConfig,
  currentIndex,
  maxCarouselItems,
  remainingIndexes,
  goToItem,

  CustomChildrenDots,
}: T.TypesDots) => {
  const { visibleDots, hasMaxDots, dotsMainRef, dotsContainerRef } = useDots({
    currentConfig,
    remainingIndexes,
    currentIndex,
  });

  return (
    <>
      {visibleDots && hasMaxDots && !CustomChildrenDots && (
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

      {visibleDots && !hasMaxDots && !CustomChildrenDots && (
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

      {visibleDots && CustomChildrenDots && (
        <CustomChildrenDots
          currentIndex={currentIndex}
          remainingIndexes={remainingIndexes}
        />
      )}
    </>
  );
};

export default Dots;
