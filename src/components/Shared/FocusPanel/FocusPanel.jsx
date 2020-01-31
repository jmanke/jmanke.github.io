import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./FocusPanel.css";

// props
// panelVisible: type(boolean), sets panel visible
// onClose: type(callback), callback called when panel is closed 
export default props => {
  return (
	<div className={"focus-panel " + (props.panelVisible ? " focus-panel_is-visible " : " ") + (props.className ?? "")}>
		<div className="focus-panel__overlay" onClick={() => props.onClose()}>
		</div>
		<div className="focus-panel__container">
      <h3 className="focus-panel__heading">{props.heading}</h3>
			<CloseButton onClick={() => props.onClose()}/>
      <div className="focus-panel__container-contents">
				{props.children}
			</div>
		</div>
	</div>
	)};
