import React from "react";
import "./Master2.css";

function Master2(props) {
  const { className } = props;

  return (
    <article className={`master-1 ${className || ""}`}>
      <div className="container-1">
        <img className="solid-star" src="/img/solid---star.svg" alt="Solid / star" />
      </div>
    </article>
  );
}

export default Master2;
