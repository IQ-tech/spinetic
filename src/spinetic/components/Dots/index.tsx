import * as React from "react";
import * as T from "types";

const Dots = ({
  currentConfig,
  currentIndex,
  maxCarouselItems,
  remainingIndexes,
  goToItem,
}: T.TypesDots) => {
  const visibleDots = currentConfig.dots && remainingIndexes?.length > 1;

  return (
    <>
      {visibleDots && (
        <div className="spinetic-dots" style={{ ...currentConfig.dotsStyle?.container }}>
          {remainingIndexes?.map((_item: number, i: number) => (
            <span
              className={`spinetic-dot ${
                i === currentIndex ? "spinetic-dot-active" : ""
              }`}
              style={{
                ...currentConfig.dotsStyle?.dot,
                ...(i === currentIndex ? currentConfig.dotsStyle?.dotActive : null),
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
