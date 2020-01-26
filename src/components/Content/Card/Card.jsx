import React from "react";
import FocusPanel from "../../Shared/FocusPanel/FocusPanel";

export default props => {
  const [firstPageActive, setFirstPageActive] = React.useState(true);

  const firstPageVisible = firstPageActive ? " is-visible" : "";
  const secondPageVisible = firstPageActive ? "" : " is-visible";
  let i = 0;

  const onShowFocusPanel = new Event();

  return (
    <div className={"project-card " + props.className ?? ""}>
      <div className={"project-card__page primary"}>
        <img src={props.image} alt={props.title} className="card-img" />
        <div className="card-txt-area">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.cardText}</p>
          <button className="btn" onClick={() => setFirstPageActive(!firstPageVisible)}> Learn More</button>
        </div>
      </div>
      <FocusPanel onShowEvent={onShowFocusPanel}>
        Test text
      </FocusPanel>
      {/* <div className={"project-card__page secondary " + secondPageVisible}>
        <div className="card-txt-area">
          <h3 className="card-title">Overview</h3>
          <ul className="card-list">
            {props.overviewItems
              ? props.overviewItems.map(item => <li key={i++}>{item}</li>)
              : null}
          </ul>
          <i className="fas fa-times card-close" onClick={() => setFirstPageActive(!firstPageVisible)}></i>
        </div>
      </div> */}
    </div>
  );
};
