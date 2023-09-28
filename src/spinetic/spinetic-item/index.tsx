import * as React from "react";
import { ReactNode } from "react";

const SpineticItem = ({ children }: { children: ReactNode }) => {
  return <div className="spinetic-item">{children}</div>;
};

export default SpineticItem;
