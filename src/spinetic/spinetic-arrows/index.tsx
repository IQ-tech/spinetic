import * as React from "react";
import ArrowLeft from "./arrow-left";
import ArrowRight from "./arrow-right";
import { TypesArrows } from "types"

const SpineticArrows = ({
  children,
  currentConfig,
  currentIndex,
  remainingIndexes,
  onClickPreviousItem,
  onClickNextItem,
}: TypesArrows) => {
  const visibleArrows =  currentConfig.arrows && remainingIndexes?.length > 1;
  
  const isFirstItem = currentIndex === 0;
  const handleDisappearArrowLeft = isFirstItem && currentConfig?.hideArrows;

  const isLastItem = currentIndex === remainingIndexes?.length - 1;
  const handleDisappearArrowRight = isLastItem && currentConfig?.hideArrows;

  return (
    <div className="spinetic-container-arrows">
      {visibleArrows && (
        <div className="spinetic-btn-prev">
          <button
            className="spinetic-navigation-button"
            onClick={() => onClickPreviousItem()}
            disabled={isFirstItem}
            style={{
              right: `${currentConfig.arrowLeftPosition}px`,
              display: handleDisappearArrowLeft ? "none" : "flex",
            }}
          >
            <ArrowLeft />
          </button>
        </div>
      )}
      { children }
      {visibleArrows && (
        <div className="spinetic-btn-next">
          <button
            className="spinetic-navigation-button"
            onClick={() => onClickNextItem()}
            disabled={isLastItem}
            style={{
              left: currentConfig.autoWidth
                ? `${currentConfig.arrowRightPosition + 4}px`
                : `${currentConfig.arrowRightPosition}px`,
              display: handleDisappearArrowRight ? "none" : "flex",
            }}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default SpineticArrows;
