import * as React from "react";
import * as T from "types";

const ArrowLeft = React.memo(() => {
  return (
    <svg
      style={{ marginRight: "2px" }}
      xmlns="http://www.w3.org/2000/svg"
      height="21"
      width="13"
      viewBox="0 0 13 21"
    >
      <g transform="matrix(-1 0 0 -1 12.828 21.657)">
        <g transform="translate(-9.672 -5.234)">
          <path
            d="M12.5,24.062l8-8-8-8"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
      </g>
    </svg>
  );
});

const ArrowRight = React.memo(() => {
  return (
    <svg
      style={{ marginLeft: "2px" }}
      xmlns="http://www.w3.org/2000/svg"
      height="21"
      width="13"
      viewBox="0 0 13 21"
    >
      <g transform="translate(-9.672 -5.234)">
        <path
          d="M12.5,24.062l8-8-8-8"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
});

const Arrows = ({
  children,
  currentConfig,
  currentIndex,
  remainingIndexes,
  onClickPreviousItem,
  onClickNextItem,
}: T.TypesArrows) => {
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

export default Arrows;
