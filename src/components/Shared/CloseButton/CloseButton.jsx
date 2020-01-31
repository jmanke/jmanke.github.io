import React from "react";
import "./CloseButton.css";

// props.onClick: your callback on click
export default props => {

  return (
	<div className={"close-button " + (props.className ?? "")} onClick={props.onClick}>
    <i className="fas fa-times close-button__close-icon" />
	</div>
	)};
