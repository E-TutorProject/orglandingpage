import React from "react";
import "./ButtonPrimaryWithIcon3.css";

function ButtonPrimaryWithIcon3(props) {
  const { className } = props;

  return (
    <div className={`button-primary-with-icon-3 ${className || ""}`}>
      <div className="frame-1-2">
        <div className="button-name-2 valign-text-middle inter-bold-blue-16px">Explore Free Trial</div>
        <div className="icon-11">
          <img
            className="icon-outlinearrow-right"
            src="/img/icon-outline-arrow-right.svg"
            alt="Icon/Outline/arrow-right"
          />
        </div>
      </div>
    </div>
  );
}

export default ButtonPrimaryWithIcon3;
