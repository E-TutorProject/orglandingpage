import React from "react";
import ElementsDataLinesY from "../ElementsDataLinesY";
import ElementsDataLinesY2 from "../ElementsDataLinesY2";
import "./ElementsDataY.css";

function ElementsDataY(props) {
  const {
    elementsDataLinesYProps,
    elementsDataLinesY21Props,
    elementsDataLinesY22Props,
    elementsDataLinesY23Props,
    elementsDataLinesY24Props,
  } = props;

  return (
    <div className="elements-data-y">
      <ElementsDataLinesY elementsLegendTextProps={elementsDataLinesYProps.elementsLegendTextProps} />
      <ElementsDataLinesY2 elementsLegendText2Props={elementsDataLinesY21Props.elementsLegendText2Props} />
      <ElementsDataLinesY2 elementsLegendText2Props={elementsDataLinesY22Props.elementsLegendText2Props} />
      <ElementsDataLinesY2 elementsLegendText2Props={elementsDataLinesY23Props.elementsLegendText2Props} />
      <ElementsDataLinesY2 elementsLegendText2Props={elementsDataLinesY24Props.elementsLegendText2Props} />
    </div>
  );
}

export default ElementsDataY;
