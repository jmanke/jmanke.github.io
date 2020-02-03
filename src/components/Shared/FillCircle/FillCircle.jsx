import React from "react";
import "./FillCircle.css";

export default props => {
  return (
    <div className="fill-circle">
      <h3 className="fill-circle__label">{props.label}</h3>
      <div className={"progress-circle " + (props.fill > 50 ? "over50 " : "") + "p" + props.fill.toString()}>
        <span>{props.fill + "%"}</span>
        <div className="left-half-clipper">
          <div className="first50-bar"></div>
          <div className="value-bar"></div>
        </div>
      </div>
    </div>
  );
};
