import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./FocusPanel.css";

export default props => {
	const [panelVisible, setPanelVisible] = React.useState(true);



  return (
	<div className={"focus-panel " + (panelVisible ? "is-visible " : " ") + (props.className ?? "")}>
		<div className="panel-overlay" onClick={() => setPanelVisible(false)}>

		</div>
		<div className="panel-container">
			<CloseButton onClick={() => setPanelVisible(false)}/>
		</div>
	</div>
	)};
