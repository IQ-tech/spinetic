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
    prevChildren,
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
      {currentConfig.verticalAlign && (
        <div className="spinetic-vertical-align">
          <div>
            {React.Children.map(prevChildren.current, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child);
              }
              return <h1>Not a React component</h1>;
            })}
          </div>
        </div>
      )}

      {!currentConfig.verticalAlign && (
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
                {React.Children.map(prevChildren.current, (child) => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(child);
                  }
                  return <h1>Not a React component</h1>;
                })}
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
    </>
  );
};

export default Spinetic;
