import * as React from "react";
import { ReactNode } from "react";

const SpineticItem = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <div className="spinetic-item">{children}</div>;
};

 export default React.memo(SpineticItem); 
