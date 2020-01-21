import React from "react";
import Img from "../../../images/tft.png";

export default () => {
  const [secondPageActive, setSecondPageActive] = React.useState("");

  function onReadMore() {
    setSecondPageActive(" page-visible");
  }

  return (
    <div className="project-card">
      <div className="project-card__page primary">
        <img src={Img} alt="Test" className="card-img" />
        <h3 className="card-title">Card Title</h3>
        <p className="card-text">
        This is some test text for a card.
        This is some test text for a card.
        This is some test text for a card.
        This is some test text for a card.
        This is some test text for a card.
        This is some test text for a card.
        </p>
        <button className="card-readmore" onClick={onReadMore}>Read More</button>
      </div>
      <div className={"project-card__page secondary" + secondPageActive}>
        <p>TEST</p>
      </div>
    </div>
  );
}