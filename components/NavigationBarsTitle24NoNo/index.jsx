import React from "react";
import ElementsTextBoxNavBar from "../ElementsTextBoxNavBar";
import "./NavigationBarsTitle24NoNo.css";

function NavigationBarsTitle24NoNo(props) {
  const { elementsTextBoxNavBarProps } = props;

  return (
    <div className="navigation-bars-title-24-no-no">
      <div className="container">
        <ElementsTextBoxNavBar>{elementsTextBoxNavBarProps.children}</ElementsTextBoxNavBar>
      </div>
    </div>
  );
}

export default NavigationBarsTitle24NoNo;
