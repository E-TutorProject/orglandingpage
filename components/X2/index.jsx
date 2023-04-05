import React from "react";
import "./X2.css";

function X2(props) {
  const { step2CuratedDynamicPlan, className } = props;

  return (
    <div className={`x1-6 ${className || ""}`}>
      <p className="step-1-diagnostic-assessment inter-semi-bold-magic-potion-24px">{step2CuratedDynamicPlan}</p>
      <img
        className="icon-outlinecheveron-down-2"
        src="/img/icon-outline-cheveron-down.svg"
        alt="Icon/Outline/cheveron-down"
      />
    </div>
  );
}

export default X2;
