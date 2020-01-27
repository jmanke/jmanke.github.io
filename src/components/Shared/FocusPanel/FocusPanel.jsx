import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./FocusPanel.css";

// props
// panelVisible: type(boolean), sets panel visible
// onClose: type(callback), callback called when panel is closed 
export default props => {
  return (
	<div className={"focus-panel " + (props.panelVisible ? "is-visible " : " ") + (props.className ?? "")}>
		<div className="panel-overlay" onClick={() => props.onClose()}>
		</div>
		<div className="panel-container">
			<CloseButton onClick={() => props.onClose()}/>
			{props.children}
		</div>
	</div>
	)};
