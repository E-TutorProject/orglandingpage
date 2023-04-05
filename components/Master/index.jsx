import React from "react";
import ElementsSpacer from "../ElementsSpacer";
import RatingStarOnly from "../RatingStarOnly";
import ElementsTextBoxTableRow from "../ElementsTextBoxTableRow";
import "./Master.css";

function Master(props) {
  const { ratingStarOnlyProps, elementsTextBoxTableRowProps, elementsSpacerProps } = props;

  return (
    <div className="master">
      <div className="list-item-compact-ar">
        <div className="content-frame">
          <ElementsSpacer />
          <div className="icon-frame">
            <div className="icon-8">
              <RatingStarOnly master2Props={ratingStarOnlyProps.master2Props} />
            </div>
          </div>
          <div className="text-frame">
            <div className="main-text">
              <div className="content-leading">
                <ElementsTextBoxTableRow>{elementsTextBoxTableRowProps.children}</ElementsTextBoxTableRow>
              </div>
            </div>
          </div>
          <ElementsSpacer className={elementsSpacerProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Master;
