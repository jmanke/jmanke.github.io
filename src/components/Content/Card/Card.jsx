import React from "react";
import FocusPanel from "../../Shared/FocusPanel/FocusPanel";

export default props => {
  const [panelVisible, setPanelVisible] = React.useState(false);
  let i = 0;

  return (
    <div className={"project-card " + (props.className ?? "")}>
      <div className={"project-card__page"}>
        <img src={props.image} alt={props.title} className="project-card__img" />
        <div className="project-card__txt-area">
          <h4 className="project-card__title">{props.title}</h4>
          <p className="project-card__text">{props.cardText}</p>
          <button className="btn" onClick={() => setPanelVisible(true)}> Learn More</button>
        </div>
      </div>
      <FocusPanel heading={props.title} panelVisible={panelVisible} onClose={() => setPanelVisible(false)}>
        <div className="project-card__panel">
          <div className="project-card__panel-content">
            <h4 className="project-card__title">Achievements</h4>
            <ul className="project-card__list">
              {props.achievements
                ? props.achievements.map(item => <li className="txt-sm" key={i++}>{item}</li>)
                : null}
            </ul>
          </div>

          <div className="project-card__panel-content">
            <h4 className="project-card__title">Technologies</h4>
            <ul className="project-card__list_technologies">
              {props.technologies
                ? props.technologies.map(item => <li className="txt-sm" key={i++}>{item}</li>)
                : null}
            </ul>
          </div>
        </div>
      </FocusPanel>
    </div>
  );
};
