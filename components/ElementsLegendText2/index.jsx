import React from "react";
import "./ElementsLegendText2.css";

function ElementsLegendText2(props) {
  const { children } = props;

  return (
    <div className="elements-legend-text-1">
      <div className="label-1 archivo-bold-magic-potion-7-2px">{children}</div>
    </div>
  );
}

export default ElementsLegendText2;
