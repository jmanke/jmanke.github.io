import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import "./FocusPanel.css";

export default props => {
	const [panelVisible, setPanelVisible] = React.useState(false);

	React.useEffect( () => {

		function showPanel() {
			setPanelVisible(true)
		}

		props.onShowEvent.addEventListener("onShow", showPanel);

		return props.onShowEvent.removeEventListener("onShow", showPanel);
	});

  return (
	<div className={"focus-panel " + (panelVisible ? "is-visible " : " ") + (props.className ?? "")}>
		<div className="panel-overlay" onClick={() => setPanelVisible(false)}>
		</div>
		<div className="panel-container">
			<CloseButton onClick={() => setPanelVisible(false)}/>
			{props.children}
		</div>
	</div>
	)};
