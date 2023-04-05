import React from "react";
import Master from "../Master";
import "./Basic.css";

function Basic(props) {
  const { masterProps } = props;

  return (
    <div className="basic">
      <Master
        ratingStarOnlyProps={masterProps.ratingStarOnlyProps}
        elementsTextBoxTableRowProps={masterProps.elementsTextBoxTableRowProps}
        elementsSpacerProps={masterProps.elementsSpacerProps}
      />
    </div>
  );
}

export default Basic;
