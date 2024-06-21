import { useEffect, useRef } from "react";
import * as T from "types";

export default function useScrollbar(props: T.TypesScrollbar) {
  const { elementsChange, remainingIndexes, currentIndex } = props;
  const scrollTrail = useRef<HTMLDivElement>(null);
  const scrollbar = useRef<HTMLDivElement>(null);
  const showScroll = remainingIndexes?.length > 1;

  useEffect(() => {
    if (!scrollTrail.current || !scrollbar.current || !elementsChange?.current)
      return;
    const trailSize = scrollTrail.current.offsetWidth;
    const barSize = scrollbar.current.offsetWidth;
    const availableScrollSpace = trailSize - barSize;

    const totalItems = elementsChange.current.totalItems;
    const itemsPerPage = elementsChange.current.itemsPerScroll;
    const totalPagesIndex = Math.ceil(totalItems / itemsPerPage) - 1;

    const currentPercentage = currentIndex / totalPagesIndex;
    const scrollDistance = currentPercentage * availableScrollSpace;

    scrollbar.current.style.transform = `translateX(${scrollDistance}px)`;
  }, [elementsChange, currentIndex]);

  return {
    showScroll,
    scrollTrail,
    scrollbar,
  };
}
