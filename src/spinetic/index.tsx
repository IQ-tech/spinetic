import React from "react";

import SpineticArrows from "./SpineticArrows";
import SpineticDots from "./SpineticDots";
import { useSpinetic } from "./hooks";
import { TypesSpinetic } from "types";

const Spinetic = ({ children, config, change }: TypesSpinetic) => {
  const {
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
    end,
  } = useSpinetic({ children, config, change });

  return (
    <>
      {currentConfig.layout === "default" && (
        <div className="spinetic-main" ref={spineticMain}>
          <div className="spinetic-wrapper">
            <SpineticArrows
              currentConfig={currentConfig}
              currentIndex={currentIndex}
              remainingIndexes={remainingIndexes}
              onClickPreviousItem={previousItem}
              onClickNextItem={nextItem}
            >
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
                {children}
              </div>
            </SpineticArrows>
          </div>

          <SpineticDots
            currentConfig={currentConfig}
            currentIndex={currentIndex}
            maxCarouselItems={maxCarouselItems}
            remainingIndexes={remainingIndexes}
            goToItem={goToItem}
          ></SpineticDots>
        </div>
      )}

      {currentConfig.layout === "controlsInLine" && (
        <div className="controls-in-line spinetic-main" ref={spineticMain}>
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
                {children}
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

      {currentConfig.layout === "verticalAlign" && (
        <div className="spinetic-vertical-align">
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default Spinetic;
