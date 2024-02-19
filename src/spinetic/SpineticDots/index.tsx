import * as React from "react";
import { TypesDots } from "types";

const SpineticDots = ({
  currentConfig,
  currentIndex,
  maxCarouselItems,
  remainingIndexes,
  goToItem,
}: TypesDots) => {
  const visibleDots = currentConfig.dots && remainingIndexes?.length > 1;

  return (
    <>
      {visibleDots && (
        <div className="spinetic-dots">
          {remainingIndexes?.map((_item: number, i: number) => (
            <span
              className={`spinetic-dot ${
                i === currentIndex ? "spinetic-dot-active" : ""
              }`}
              style={{
                ...currentConfig.dotsStyle,
                ...(i === currentIndex ? currentConfig.dotsStyleActive : null),
              }}
              key={i}
              onClick={() => goToItem(i)}
            >
              {currentConfig.indexInDots && (
                <span className="spinetic-dot-index">
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

export default SpineticDots;
