import React from "react";
import Img from "../../../images/tft.png";

export default () => {
  return (
    <div className="project-card">
      <div className="project-card__page primary">
        <img src={Img} alt="Test" className="project-card__first-page__display-img" />
      </div>
      <div className="project-card__page secondary">

      </div>
    </div>
  );
}