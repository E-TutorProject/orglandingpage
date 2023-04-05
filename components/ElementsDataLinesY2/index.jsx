import React from "react";
import ElementsLegendText2 from "../ElementsLegendText2";
import "./ElementsDataLinesY2.css";

function ElementsDataLinesY2(props) {
  const { elementsLegendText2Props } = props;

  return (
    <article className="elements-data-lines-y-1">
      <ElementsLegendText2>{elementsLegendText2Props.children}</ElementsLegendText2>
    </article>
  );
}

export default ElementsDataLinesY2;
