import React from "react";
import Events from "./Shared/Events";

const pageLoading = 'page-loading';

document.body.classList.add(pageLoading);

export default () => {
  const [windowLoaded, setWindowLoaded] = React.useState(false);

  function onWindowLoad() {
    setWindowLoaded(true);
    document.body.classList.remove(pageLoading);
  }

  React.useEffect(() => {
    Events.eventEmitter.subscribe("onWindowLoad", onWindowLoad);

    return () => Events.eventEmitter.unsubscribe("onWindowLoad", onWindowLoad);
  });

  return (
    <div className={"loading-screen" + (windowLoaded ? " disable" : "")}>
			<div className={"lds-spinner loader " + (windowLoaded ? " hidden" : "")}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
