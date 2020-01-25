import React from "react";
import Events from "./Shared/Events";

export default () => {
  const [windowLoaded, setWindowLoaded] = React.useState(false);

  function onWindowLoad() {
    setWindowLoaded(true);
  }

  React.useEffect(() => {
    Events.eventEmitter.subscribe("onWindowLoad", onWindowLoad);

    return () => Events.eventEmitter.unsubscribe("onWindowLoad", onWindowLoad);
  });

  return (
    <div className={"loading-screen " + (windowLoaded ? " disable" : "")}>
			<div className={"lds-spinner loader " + (windowLoaded ? " hidden" : "")}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
