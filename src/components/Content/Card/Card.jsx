import React from "react";

export default props => {
  const [firstPageActive, setFirstPageActive] = React.useState(true);

  const firstPageVisible = firstPageActive ? " is-visible" : "";
  const secondPageVisible = firstPageActive ? "" : " is-visible";
  let i = 0;

  return (
    <div className={"project-card " + props.className ?? ""}>
      <div className={"project-card__page primary"}>
        <img src={props.image} alt="Test" className="card-img" />
        <div className="card-txt-area">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.cardText}</p>
          <button className="btn" onClick={() => setFirstPageActive(!firstPageVisible)}> Learn More</button>
        </div>
      </div>
      <div className={"project-card__page secondary " + secondPageVisible}>
        <div className="card-txt-area">
          <h3 className="card-title">Overview</h3>
          <ul className="card-list">
            {props.overviewItems
              ? props.overviewItems.map(item => <li key={i++}>{item}</li>)
              : null}
          </ul>
          <i className="fas fa-times card-close" onClick={() => setFirstPageActive(!firstPageVisible)}></i>
        </div>
      </div>
    </div>
  );
};
