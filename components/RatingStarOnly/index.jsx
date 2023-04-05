import React from "react";
import Master2 from "../Master2";
import "./RatingStarOnly.css";

function RatingStarOnly(props) {
  const { master2Props } = props;

  return (
    <div className="artwork">
      <Master2 />
      <Master2 />
      <Master2 />
      <Master2 />
      <Master2 className={master2Props.className} />
    </div>
  );
}

export default RatingStarOnly;
