import React from "react";
import ElementsLegendText from "../ElementsLegendText";
import "./ElementsDataLinesY.css";

function ElementsDataLinesY(props) {
  const { elementsLegendTextProps } = props;

  return (
    <article className="elements-data-lines-y">
      <ElementsLegendText>{elementsLegendTextProps.children}</ElementsLegendText>
    </article>
  );
}

export default ElementsDataLinesY;
