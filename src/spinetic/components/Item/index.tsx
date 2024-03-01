import * as React from "react";

const SpineticItem = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="spinetic-item">{children}</div>;
};

export default React.memo(SpineticItem);
