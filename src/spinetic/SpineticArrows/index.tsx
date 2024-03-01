import * as React from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import { TypesArrows } from "types";

const SpineticArrows = ({
  children,
  currentConfig,
  currentIndex,
  remainingIndexes,
  onClickPreviousItem,
  onClickNextItem,
}: TypesArrows) => {
  const visibleArrows = currentConfig.arrows && remainingIndexes?.length > 1;

  const isFirstItem = currentIndex === 0;
  const handleDisappearArrowLeft = isFirstItem && currentConfig?.hideArrows;

  const isLastItem = currentIndex === remainingIndexes?.length - 1;
  const handleDisappearArrowRight = isLastItem && currentConfig?.hideArrows;

  return (
    <div
      className="spinetic-container-arrows"
      style={{ ...currentConfig.arrowsStyle?.container }}
    >
      {visibleArrows && (
        <button
          className="spinetic-btn-prev"
          onClick={() => onClickPreviousItem()}
          disabled={isFirstItem}
          style={{
            display: handleDisappearArrowLeft ? "none" : "flex",
            ...currentConfig.arrowsStyle?.btnPrev,
          }}
        >
          <ArrowLeft />
        </button>
      )}
      {children}
      {visibleArrows && (
        <button
          className="spinetic-btn-next"
          onClick={() => onClickNextItem()}
          disabled={isLastItem}
          style={{
            display: handleDisappearArrowRight ? "none" : "flex",
            ...currentConfig.arrowsStyle?.btnNext,
          }}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default SpineticArrows;
