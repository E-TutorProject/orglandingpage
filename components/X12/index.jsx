import React from "react";
import "./X12.css";

function X12(props) {
  const { thisSoftwareIsTr, image, name, tutor, className } = props;

  return (
    <div className={`x1-7 ${className || ""}`}>
      <p className="this-software-is-tr inter-semi-bold-magic-potion-20px">{thisSoftwareIsTr}</p>
      <div className="img-text-1">
        <img className="line-242-1" src="/img/line-242.svg" alt="Line 242" />
        <div className="text-16">
          <img className="image-1" src={image} alt="image" />
          <div className="text-17">
            <div className="name inter-bold-magic-potion-18px">{name}</div>
            <div className="flex-row-3">
              <div className="tutor inter-medium-storm-dust-18px">{tutor}</div>
              <img className="favourite-31-1" src="/img/favourite-31@2x.png" alt="favourite-31" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X12;
