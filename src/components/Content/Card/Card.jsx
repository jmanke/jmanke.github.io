import React from "react";
import Img from "../../../images/tft.png";

export default () => {
  return (
    <div className="project-card">
      <img src={Img} alt="Test" className="project-card__img-display" />
      <h3 className="project-card__heading">Project Cheese</h3>
      <p className="project-card__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
    </div>
  );
}