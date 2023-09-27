import { useState } from "react";
import * as SpineticUtils from "./spinetic-utils";
import { TypesUseDragSpinetic, TypesEventDragStart, TypesEventDragMove, TypesEventDragEnd } from "../spinetic-types"

export const useDragSpinetic = ({ 
    currentConfig, 
    remainingIndexes, 
    spineticContainer, 
    _carouselItemsWidths, 
    currentIndex, 
    _setCarouselContainerTransform, 
    previousItem,
    nextItem,
    _handleItemChange
 }: TypesUseDragSpinetic) => {

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
    };

    const start = (e: TypesEventDragStart): void => {
        if (remainingIndexes?.length <= 1) return;
        detectTouchScreen();

        if (cancelDraggable || currentConfig.verticalAlign) return;
        e.stopPropagation();

        let touchStart = e?.touches?.[0];
        setStartX(e?.pageX || touchStart?.pageX);
        setStartTX(touchStart?.clientX);
        setStartTY(touchStart?.clientY);

        setIsDragging(true);
        setItemElement(SpineticUtils.findElement(e.target));

        spineticContainer?.current!.classList.add("spinetic-no-transition");
    }

    const move = (e: TypesEventDragMove): void => {
        let touchMove = e?.touches?.[0];

        let currenTX = touchMove?.clientX;
        let currenTY = touchMove?.clientY;

        let deltaX = Math.abs(currenTX - startTX);
        let deltaY = Math.abs(currenTY - startTY);

        let notDraggable = cancelDraggable || !isDragging;

        if (deltaY > 30 || notDraggable || currentConfig.verticalAlign) {
            return;
        } else if ((deltaX > deltaY && deltaX > 20) || !touchMove) {
            e.stopPropagation();

            const currentX =
                e?.pageX || touchMove?.pageX - spineticContainer?.current!.scrollLeft;

            const dist = currentX - startX;
            setFinalDist(dist);

            let scrollAmountDrag = SpineticUtils.calculateScrollAmount(
                _carouselItemsWidths,
                currentIndex
            );

            scrollAmountDrag += dist;
            if (deltaX > 20 || !touchMove) {
                _setCarouselContainerTransform(scrollAmountDrag);
            }

            if (finalDist && Math.abs(finalDist) > currentConfig?.touchThreshold) {
                if (itemElement) itemElement.classList.add("no-click");
            }
        }
    }

    const end = (e: TypesEventDragEnd): void => {
        setIsDragging(false);

        if (cancelDraggable || currentConfig.verticalAlign) return;
        e.stopPropagation();
        spineticContainer?.current!.classList.remove("spinetic-no-transition");

        if (finalDist && Math.abs(finalDist) > currentConfig?.touchThreshold) {
            finalDist > 0 ? previousItem() : nextItem();
        }

        itemElement?.classList?.remove("no-click");
        setFinalDist(null)
        _handleItemChange();
    }

    return {
        start,
        move, 
        end
    }
}