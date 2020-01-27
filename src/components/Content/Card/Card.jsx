import React from "react";
import FocusPanel from "../../Shared/FocusPanel/FocusPanel";

export default props => {
  const [panelVisible, setPanelVisible] = React.useState(false);
  let i = 0;

  return (
    <div className={"project-card " + (props.className ?? "")}>
      <div className={"project-card__page"}>
        <img src={props.image} alt={props.title} className="card-img" />
        <div className="card-txt-area">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.cardText}</p>
          <button className="btn" onClick={() => setPanelVisible(true)}> Learn More</button>
        </div>
      </div>
      <FocusPanel panelVisible={panelVisible} onClose={() => setPanelVisible(false)}>
        <div className="card-txt-area">
          <h3 className="card-title">Overview</h3>
          <ul className="card-list">
            {props.overviewItems
              ? props.overviewItems.map(item => <li key={i++}>{item}</li>)
              : null}
          </ul>
        </div>
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
