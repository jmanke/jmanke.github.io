import React from "react";
import Img from "../../../images/MineLife-VR.jpg";

export default (props) => {
  const [firstPageActive, setFirstPageActive] = React.useState(true);

  const firstPageVisible = firstPageActive ? " is-visible" : "";
  const secondPageVisible = firstPageActive ? "" : " is-visible";
  let i = 0;

  return (
    <div className="project-card">
      <div className={"project-card__page primary"}>
        <img src={props.image} alt="Test" className="card-img" />
        <h3 className="card-title">{props.title}</h3>
        <hr className="card-hr" />
        <p className="card-text txt-md">
          {props.cardText}
        </p>
      </div>
      <div className={"project-card__page secondary " + secondPageVisible}>
        <h3 className="card-title">Overview</h3>
        <hr className="card-hr" />
        <ul className="card-list">
          {props.overviewItems ? 
            props.overviewItems.map(item => <li key={i++}>{item}</li>) : 
            null}
        </ul>
      </div>
      <div className="card-learnmore" onClick={() => setFirstPageActive(!firstPageVisible)}>
        {firstPageVisible ?
          <p className="card-learnmore__text txt-md">Learn More</p> :
          <i className="fas fa-chevron-down card-learnmore__text txt-xlg" />}
      </div>
    </div>
  );
}