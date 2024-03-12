import React, { RefObject, useEffect, useRef, useState } from "react";
import * as T from "types";
import * as U from "../../../helpers/utils";

const useDots = ({ currentConfig, remainingIndexes, currentIndex }: any) => {
    const dotsMainRef: RefObject<any> = useRef(null);
    const dotsContainerRef: RefObject<any> = useRef(null);

    const visibleDots = currentConfig.dots && remainingIndexes?.length > 1;
    const visibleDotsCount = 5;
    const halfVisibleDots = Math.floor(visibleDotsCount / 2);
    const hasMaxDots = remainingIndexes?.length > visibleDotsCount && currentConfig.maxDots;

    const [dotsConfig, setDotsConfig] = useState<any>({
        dotWith: undefined,
        dotActiveWidth: undefined,
        mainDotsWidth: undefined,
    });

    const handleDotsWrapper = (padding: string) => {
        const dotsWrapper = dotsMainRef.current.children[0];

        dotsWrapper.style.paddingLeft = padding;
        dotsContainerRef.current.style.transform = `translateX(${-currentIndex * dotsConfig.dotWidth}px)`;
    }

    const handleScrollDots = () => {
        const isFirstDot = currentIndex === 0;
        const isSecondDot = currentIndex === 1;
        const isThirdDotOrNext = currentIndex >= 2;
        const isLastDot = currentIndex >= remainingIndexes?.length - halfVisibleDots;

        if (isFirstDot) handleDotsWrapper("")
        if (isSecondDot) handleDotsWrapper(`${dotsConfig.dotWidth}px`)
        if (isThirdDotOrNext) handleDotsWrapper(`${halfVisibleDots * dotsConfig.dotWidth}px`)
        if (isLastDot) handleDotsWrapper(`${(halfVisibleDots + 1) + dotsConfig.dotActiveWidth}px`)
    };

    const handleDotsConfig = () => {
        const dotWidth = U.sumWidthElemnt(dotsContainerRef?.current?.children[1]);
        const dotActiveWidth = U.sumWidthElemnt(dotsContainerRef?.current?.children[0]);
        const mainDotsWidth = dotActiveWidth + (visibleDotsCount - 1) * dotWidth;

        if (dotWidth > 0 && !dotsConfig.dotWidth) {
            setDotsConfig({ dotWidth, dotActiveWidth, mainDotsWidth });
            dotsMainRef.current.style.width = `${mainDotsWidth}px`;
        }
    }

    useEffect(() => {
        if (dotsMainRef.current) {
            handleDotsConfig();
            handleScrollDots();
        }
    }, [
        currentIndex,
        remainingIndexes,
        currentConfig.maxDots, 
        currentConfig.dots, 
        currentConfig.layout
    ]);



    return {
        visibleDots,
        hasMaxDots,
        dotsMainRef,
        dotsContainerRef
    }
}

export default useDots;