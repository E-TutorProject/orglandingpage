import React from "react";
import "./ElementsSpacer.css";

function ElementsSpacer(props) {
  const { className } = props;

  return <div className={`elements-spacer ${className || ""}`}></div>;
}

export default ElementsSpacer;
