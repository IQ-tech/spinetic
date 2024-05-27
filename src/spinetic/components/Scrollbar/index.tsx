import React from "react";
import * as T from "types";
import useScrollbar from "./hooks";

export default function Scrollbar(props: T.TypesScrollbar) {
  const { showScroll, scrollTrail, scrollbar } = useScrollbar(props);

  return showScroll ? (
    <div ref={scrollTrail} className="spinetic-scrollbar">
      <div ref={scrollbar} className="spinetic-scrollbar-scroll" />
    </div>
  ) : null;
}
