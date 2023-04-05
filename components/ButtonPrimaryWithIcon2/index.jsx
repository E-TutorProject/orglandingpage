import React from "react";
import "./ButtonPrimaryWithIcon2.css";

function ButtonPrimaryWithIcon2(props) {
  const { children, className } = props;

  return (
    <div className={`button-primary-with-icon-1 ${className || ""}`}>
      <div className="frame-1-1">
        <div className="button-name-1 valign-text-middle inter-semi-bold-bridal-heath-16px">{children}</div>
      </div>
    </div>
  );
}

export default ButtonPrimaryWithIcon2;
