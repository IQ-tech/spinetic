import React from "react";

import SpineticArrows from "./SpineticArrows";
import SpineticDots from "./SpineticDots";
import { useSpinetic } from "./hooks";
import { TypesSpinetic } from "types";

const Spinetic = ({ children, config, change }: TypesSpinetic) => {
  const {
    currentConfig,
    prevChildren,
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
  } = useSpinetic({ children, config, change });

  return (
    <>
      {currentConfig.layout !== "vertical-align" && (
        <div className={`spinetic-main spinetic-layout-${currentConfig.layout}`} ref={spineticMain}>
          <div className="spinetic-wrapper">
            <div>
              <div
                className="spinetic-container"
                ref={spineticContainer}
                onMouseDown={start}
                onMouseMove={move}
                onMouseUp={end}
                onMouseLeave={end}
                onTouchStart={start}
                onTouchMove={move}
                onTouchEnd={end}
              >
                {prevChildren.current}
              </div>
            </div>
          </div>
          <SpineticArrows
            currentConfig={currentConfig}
            currentIndex={currentIndex}
            remainingIndexes={remainingIndexes}
            onClickPreviousItem={previousItem}
            onClickNextItem={nextItem}
          />
            <SpineticDots
              currentConfig={currentConfig}
              currentIndex={currentIndex}
              maxCarouselItems={maxCarouselItems}
              remainingIndexes={remainingIndexes}
              goToItem={goToItem}
            />
        </div>
      )}

      {currentConfig.layout === "vertical-align" && (
        <div className="spinetic-layout-vertical-align">
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default Spinetic;
