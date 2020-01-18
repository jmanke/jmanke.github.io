import React from "react";

export default (props) => (
  <div className={"nav-tooltip " + props.className}>
  <span className="nav-tooltip__arrow"></span>
    <strong>{props.title}</strong>
  </div>
);