import React from "react";
import "./ElementsTextBoxNavBar.css";

function ElementsTextBoxNavBar(props) {
  const { children } = props;

  return (
    <div className="elements-text-box-nav-bar">
      <div className="title">{children}</div>
    </div>
  );
}

export default ElementsTextBoxNavBar;
