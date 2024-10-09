import React from "react";

import Arrows from "./components/Arrows";
import Dots from "./components/Dots";
import { useSpinetic } from "./hooks";
import * as T from "types";
import Scrollbar from "./components/Scrollbar";

const Spinetic = ({ children, CustomChildrenDots, config, change }: T.TypesSpinetic) => {
  const {
    currentConfig,
    progressIndicatorType,
    currentIndex,
    spineticMain,
    spineticContainer,
    maxCarouselItems,
    elementsChange,
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
      {currentConfig.layout !== "vertical-align" && (
        <div
          className={`spinetic-main spinetic-layout-${currentConfig.layout}`}
          ref={spineticMain}
        >
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
                {/* {prevChildren.current} */}
                {children}
              </div>
            </div>
          </div>
          <Arrows
            currentConfig={currentConfig}
            currentIndex={currentIndex}
            remainingIndexes={remainingIndexes}
            onClickPreviousItem={previousItem}
            onClickNextItem={nextItem}
          >
            {progressIndicatorType === "dots" && (
              <Dots
                currentConfig={currentConfig}
                currentIndex={currentIndex}
                maxCarouselItems={maxCarouselItems}
                remainingIndexes={remainingIndexes}
                goToItem={goToItem}
                CustomChildrenDots={CustomChildrenDots}
              />
            )}

            {progressIndicatorType === "scrollbar" && (
              <Scrollbar
                currentIndex={currentIndex}
                elementsChange={elementsChange}
                remainingIndexes={remainingIndexes}
              />
            )}
          </Arrows>
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
