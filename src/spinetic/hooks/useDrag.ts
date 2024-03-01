import { useState, useCallback, useEffect } from "react";
import * as T from "types";
import * as U from "../helpers/utils";

export const useDrag = ({
    _sb,
    currentConfig,
    remainingIndexes,
    spineticContainer,
    _carouselItemsWidths,
    currentIndex,
    _setCarouselContainerTransform,
    previousItem,
    nextItem,
    _handleItemChange
}: T.TypesUseDragSpinetic) => {
    const [startX, setStartX] = useState<number>(0);
    const [startTX, setStartTX] = useState<number>(0);
    const [startTY, setStartTY] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [cancelDraggable, setCancelDraggable] = useState<boolean>(false);
    const [itemElement, setItemElement] = useState<HTMLElement | null>(null);
    const [finalDist, setFinalDist] = useState<number | null>(null);

    const detectTouchScreen = () => {
        const touchSupport = "ontouchstart" in window || navigator?.maxTouchPoints > 0;

        setCancelDraggable(touchSupport ? false : !currentConfig?.draggable);
    }

    useEffect(() => {
        detectTouchScreen();
    }, [detectTouchScreen, window?.ontouchstart, navigator?.maxTouchPoints]);

    const handleTransitionClass = useCallback((add: boolean) => {
        const container = spineticContainer?.current;
        if (container) {
            container.classList[add ? 'add' : 'remove']("spinetic-no-transition");
        }
    }, [spineticContainer]);

    const start = useCallback((e: T.TypesEventDragStart): void => {
        if (
            _sb && !currentConfig.draggable ||
            remainingIndexes?.length <= 1 ||
            cancelDraggable ||
            currentConfig.layout === "vertical-align"
        ) return;

        e.stopPropagation();

        const touchStart = e.touches?.[0];
        setStartX(e.pageX || touchStart?.pageX || 0);
        setStartTX(touchStart?.clientX || 0);
        setStartTY(touchStart?.clientY || 0);

        setIsDragging(true);
        setItemElement(U.findElement(e.target));

        if (!cancelDraggable) {
            handleTransitionClass(true);
        }
    }, [
        currentConfig,
        _sb,
        currentConfig.draggable,
        remainingIndexes?.length,
        cancelDraggable,
        handleTransitionClass
    ])

    const move = useCallback((e: T.TypesEventDragMove): void => {
        if (_sb && !currentConfig.draggable ||
            !isDragging ||
            cancelDraggable ||
            currentConfig.layout === "vertical-align"
        ) {
            return;
        }

        const touchMove = e.touches?.[0];

        const currentTX = touchMove?.clientX || 0;
        const currentTY = touchMove?.clientY || 0;

        const deltaX = Math.abs(currentTX - startTX);
        const deltaY = Math.abs(currentTY - startTY);

        if (deltaY > 30) {
            return;
        } else if ((deltaX > deltaY && deltaX > 20) || !touchMove) {
            e.stopPropagation();

            const currentX = e.pageX || (touchMove?.pageX || 0) - (spineticContainer?.current?.scrollLeft || 0);
            const dist = currentX - startX;

            setFinalDist(dist);

            const scrollAmountDrag = U.calculateScrollAmount(_carouselItemsWidths, currentIndex) + dist;

            if (deltaX > 20 || !touchMove) {
                _setCarouselContainerTransform(scrollAmountDrag);
            }

            if (finalDist && Math.abs(finalDist) > currentConfig.touchThreshold) {
                if (itemElement) itemElement.classList.add("no-click");
            }
        }
    },
        [
            _sb,
            currentConfig.draggable,
            isDragging,
            cancelDraggable,
            currentConfig.layout,
            startTX,
            startTY,
            startX,
            finalDist,
            itemElement,
            _carouselItemsWidths,
            currentIndex,
            _setCarouselContainerTransform],
    )

    const end = useCallback((e: T.TypesEventDragEnd): void => {
        if (_sb && !currentConfig.draggable || cancelDraggable || currentConfig.layout === "vertical-align") {
            return;
        }

        setIsDragging(false);
        e.stopPropagation();

        if (finalDist && Math.abs(finalDist) > currentConfig.touchThreshold) {
            finalDist > 0 ? previousItem() : nextItem();
        }

        if (itemElement) itemElement.classList.remove("no-click");
        setFinalDist(null);
        _handleItemChange();
        handleTransitionClass(false);
    }, [
        _sb,
        currentConfig.draggable,
        cancelDraggable,
        currentConfig.layout,
        finalDist,
        previousItem,
        nextItem,
        itemElement,
        _handleItemChange,
        handleTransitionClass
    ])

    return {
        start,
        move,
        end
    };
};
