import React from "react";

export default () => {
  const [windowLoaded, setWindowLoaded] = React.useState(false);
  window.onload = () => setWindowLoaded(true);

  return (
    <div className={"loading-screen " + (windowLoaded ? " disable" : "")}>
			<div className={"lds-spinner loader " + (windowLoaded ? " hidden" : "")}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};
