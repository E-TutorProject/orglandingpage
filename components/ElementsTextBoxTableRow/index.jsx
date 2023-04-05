import React from "react";
import "./ElementsTextBoxTableRow.css";

function ElementsTextBoxTableRow(props) {
  const { children } = props;

  return (
    <div className="elements-text-box-table-row">
      <div className="title-1">{children}</div>
    </div>
  );
}

export default ElementsTextBoxTableRow;
