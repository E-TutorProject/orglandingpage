import React from "react";
import "./ButtonPrimaryWithIcon.css";

function ButtonPrimaryWithIcon(props) {
  const { children } = props;

  return (
    <div className="button-primary-with-icon">
      <div className="frame-1">
        <div className="button-name valign-text-middle inter-semi-bold-governor-bay-16px">{children}</div>
      </div>
    </div>
  );
}

export default ButtonPrimaryWithIcon;
