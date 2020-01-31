import React, { useState } from "react";
import NavTooltip from "./NavToolTip";

export default (props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a className={"nav-item" + (props.sectionActive ? " active" : "")} href={props.href} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className={"nav-item__active-bar" + (props.sectionActive ? " nav-item__active-bar_show" : " nav-item__active-bar_hidden")} />
      <i className={props.icon + (((isHovering || props.sectionActive) && props.showTooltip) ? " scale-expand" : " scale-original")}></i>
      {props.displayTitle ? <span className="nav-item__text">{" " + props.title}</span> : null}
      {props.showTooltip ? <NavTooltip title={props.title} className={isHovering ? "fade-in" : "fade-out"} /> : null}
    </a>
  );
}