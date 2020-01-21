import React from "react";
import Img from "../../../images/MineLife-VR.jpg";

export default (props) => {
  const [firstPageActive, setFirstPageActive] = React.useState(true);

  const firstPageVisible = firstPageActive ? " is-visible" : "";
  const secondPageVisible = firstPageActive ? "" : " is-visible";

  return (
    <div className="project-card">
      <div className={"project-card__page primary"}>
        <img src={props.image} alt="Test" className="card-img" />
        <h3 className="card-title">{props.title}</h3>
        <hr className="card-hr" />
        <p className="card-text">
          {props.cardText}
        </p>
      </div>
      <div className={"project-card__page secondary " + secondPageVisible}>
        <h3 className="card-title">Overview</h3>
        <hr className="card-hr" />
        <ul className="card-list">
          {props.overviewItems ? props.overviewItems.map(item => <li>{item}</li>) : null}
        </ul>
      </div>
      <div className="card-learnmore" onClick={() => setFirstPageActive(!firstPageVisible)}>
        {firstPageVisible ?
          <h4 className="card-learnmore__text">Learn More</h4> :
          <i className="fas fa-chevron-down card-learnmore__text" />}
      </div>
    </div>
  );
}