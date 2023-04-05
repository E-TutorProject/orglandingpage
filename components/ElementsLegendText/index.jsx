import React from "react";
import "./ElementsLegendText.css";

function ElementsLegendText(props) {
  const { children } = props;

  return (
    <div className="elements-legend-text">
      <div className="label">{children}</div>
    </div>
  );
}

export default ElementsLegendText;
