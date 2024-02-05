import * as React from "react";
import SpineticArrows from "./spinetic-arrows";
import SpineticDots from "./spinetic-dots";
import { useSpinetic } from "./spinetic";
import { TypesSpinetic } from "types";

const Spinetic = ({
  sb,
  children,
  config,
  change
}: TypesSpinetic ) => {

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
  } = useSpinetic({ sb, children, config, change });

  return (
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
            { children }
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
  );
};

export default Spinetic;
