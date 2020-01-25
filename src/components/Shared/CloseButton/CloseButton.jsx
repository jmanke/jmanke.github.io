import React from "react";
import "./CloseButton.css";

// props.onClick: your callback on click
export default props => {

  return (
	<div className={"close-button " + (props.className ?? "")} onClick={props.onClick}>
    <i class="fas fa-times close-icon" />
	</div>
	)};
