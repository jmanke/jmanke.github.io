import React, { useState } from "react";
import NavTooltip from "./NavToolTip";

export default (props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a className={"nav__item" + (props.sectionActive ? " active" : "")} href={props.href} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className={"nav__item__active-bar" + (props.sectionActive ? " show" : " hidden")} />
      <i className={props.icon + (((isHovering || props.sectionActive) && props.showTooltip) ? " scale-expand" : " scale-original")}></i>
      <span className="nav__item__text">{" " + props.title}</span>
      {props.showTooltip ? <NavTooltip title={props.title} className={isHovering ? "fade-in" : "fade-out"} /> : null}
    </a>
  );
}