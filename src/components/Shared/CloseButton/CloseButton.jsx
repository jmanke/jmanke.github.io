import React from "react";
import closeImg from "./close.svg";
import "./CloseButton.css";

// props.onClick: your callback on click
export default props => {

  return (
    <img src={closeImg} alt={"close"} className={"close-button " + (props.className ?? "")} onClick={props.onClick} />
  )
};
