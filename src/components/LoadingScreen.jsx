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
    if (React.windowIsLoaded && !windowLoaded) {
      onWindowLoad();
    }

    if (!React.windowIsLoaded && !windowLoaded) {
      Events.eventEmitter.subscribe("onWindowLoad", onWindowLoad);
    
      return () => Events.eventEmitter.unsubscribe("onWindowLoad", onWindowLoad);
    }
  });

  return (
    <div className={"loading-screen" + (windowLoaded ? " loading-screen_disable" : "")}>
			<div className={"lds-spinner loading-screen__loader " + (windowLoaded ? " hidden" : "")}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
