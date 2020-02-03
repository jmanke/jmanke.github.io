import React, { useState } from "react";

// const tooltipStyle = height => {
//   top: height.toString() + "px";
// };

export default props => {
  const [isHovering, setIsHovering] = useState(false);
  const [top, setTop] = React.useState(0);
  const domRef = React.useRef(null);

  function onMouseEnter() {
    const rect = domRef.current.getBoundingClientRect();
    const currTop = rect.top - rect.height / 2;

    setTop(currTop);
    setIsHovering(true);
  }

  function onMouseLeave() {
    setIsHovering(false);
  }

  return (
    <a
      className={"nav-item" + (props.sectionActive ? " active" : "")}
      href={props.href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={
          "nav-item__active-bar" +
          (props.sectionActive
            ? " nav-item__active-bar_show"
            : " nav-item__active-bar_hidden")
        }
      />
      <i
        ref={domRef}
        className={
          props.icon +
          ((isHovering || props.sectionActive) && props.showTooltip
            ? " scale-expand"
            : " scale-original")
        }
      />
      {props.displayTitle ? (
        <span className="nav-item__text">{" " + props.title}</span>
      ) : null}
      {props.showTooltip ? (
        <div
          className={"nav-tooltip " + (isHovering ? "fade-in" : "fade-out")}
          style={{ top: top + "px" }}
        >
          <span className="nav-tooltip__arrow"></span>
          <strong>{props.title}</strong>
        </div>
      ) : null}
    </a>
  );
};
