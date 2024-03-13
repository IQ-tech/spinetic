import React, { RefObject, useEffect, useRef, useState } from "react";
import * as T from "types";
import * as U from "../../../helpers/utils";

const useDots = ({ currentConfig, remainingIndexes, currentIndex }: T.TypesUseDots) => {
    const dotsMainRef = useRef<HTMLDivElement>(null);
    const dotsContainerRef = useRef<HTMLDivElement>(null);

    const visibleDots: boolean = currentConfig.dots && remainingIndexes?.length > 1;
    const visibleDotsCount: number = 5;
    const halfVisibleDots: number = Math.floor(visibleDotsCount / 2);
    const hasMaxDots: boolean = remainingIndexes?.length > visibleDotsCount && currentConfig.maxDots;

    const [dotsConfig, setDotsConfig] = useState<T.TypesDotsConfig>({
        dotWidth: undefined,
        dotActiveWidth: undefined,
        mainDotsWidth: undefined,
    });

    const handleDotsWrapper = (padding: string) => {
        const dotsWrapper: HTMLDivElement = dotsMainRef.current?.children[0] as HTMLDivElement;

        if (dotsWrapper && dotsContainerRef.current) {
            dotsWrapper.style.paddingLeft = padding;
            dotsContainerRef.current.style.transform = `translateX(${-currentIndex * (dotsConfig.dotWidth || 0)}px)`;
        }
    };

    const handleScrollDots = () => {
        const isFirstDot: boolean = currentIndex === 0;
        const isSecondDot: boolean = currentIndex === 1;
        const isThirdDotOrNext: boolean = currentIndex >= 2;
        const isLastDot: boolean = currentIndex >= (remainingIndexes?.length - halfVisibleDots) || false;

        if (isFirstDot) handleDotsWrapper("");
        if (isSecondDot) handleDotsWrapper(`${dotsConfig.dotWidth}px`);
        if (isThirdDotOrNext) handleDotsWrapper(`${halfVisibleDots * (dotsConfig.dotWidth || 0)}px`);
        if (isLastDot) handleDotsWrapper(`${(halfVisibleDots + 1) + (dotsConfig.dotActiveWidth || 0)}px`);
    };

    const handleDotsConfig = () => {
        const dotWidth = U.sumWidthElemnt(dotsContainerRef?.current?.children[1]);
        const dotActiveWidth = U.sumWidthElemnt(dotsContainerRef?.current?.children[0]);
        const mainDotsWidth = dotActiveWidth + (visibleDotsCount - 1) * (dotWidth || 0);

        if (dotWidth > 0 && !dotsConfig.dotWidth && dotsMainRef.current) {
            setDotsConfig({ dotWidth, dotActiveWidth, mainDotsWidth });
            dotsMainRef.current.style.width = `${mainDotsWidth}px`;
        }
    };

    useEffect(() => {
        if (dotsMainRef.current) {
            handleDotsConfig();
            handleScrollDots();
        }
    }, [currentIndex, remainingIndexes, currentConfig.maxDots, currentConfig.dots, currentConfig.layout]);

    return {
        visibleDots,
        hasMaxDots,
        dotsMainRef,
        dotsContainerRef
    };
};

export default useDots;