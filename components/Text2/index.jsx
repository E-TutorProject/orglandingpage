import React from "react";
import "./Text2.css";

function Text2(props) {
  const { unlimitedDiagnostics, weProvideUnlimited, className } = props;

  return (
    <div className={`text-14-1 ${className || ""}`}>
      <div className="unlimited-diagnostics cabinetgrotesk-bold-magic-potion-28px">{unlimitedDiagnostics}</div>
      <p className="we-provide-unlimited inter-normal-magic-potion-16px">{weProvideUnlimited}</p>
    </div>
  );
}

export default Text2;
