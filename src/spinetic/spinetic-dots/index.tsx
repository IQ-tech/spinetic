import * as React from "react";
import { TypesDots } from "../../../types"

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
              key={i}
              className={`${currentConfig.dotsModel} ${
                i === currentIndex ? `active-${currentConfig.dotsModel}` : ""
              }`}
              onClick={() => goToItem(i)}
            >
              {currentConfig.indexInDots && (
                <span>
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
