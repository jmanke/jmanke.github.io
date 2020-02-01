import React from "react";

const pageLoading = 'page-loading';

document.body.classList.add(pageLoading);

export default () => {
  const [windowLoaded, setWindowLoaded] = React.useState(false);

  function onWindowLoad() {
    setWindowLoaded(true);
    document.body.classList.remove(pageLoading);
  }

  React.useEffect(() => {
    window.addEventListener("load", onWindowLoad);

    return () => window.removeEventListener("load", onWindowLoad);
  });

  return (
    <div className={"loading-screen" + (windowLoaded ? " loading-screen_disable" : "")}>
			<div className={"lds-spinner loading-screen__loader " + (windowLoaded ? " hidden" : "")}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
