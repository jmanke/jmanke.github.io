import React from "react";
import styled from "styled-components";
import Events from "components/Shared/Events";
import LdsSpinner from "components/Shared/LdsSpinner/LdsSpinner";

const pageLoading = 'page-loading';
document.body.classList.add(pageLoading);

const LoadingPage = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1E1E1E;
  z-index: 1000;
  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.active ? `none` : `scale(0)`};
  transition: opacity 1s ease-in-out, height 0s linear 1s;
`

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
    <LoadingPage active={!windowLoaded}>
      <LdsSpinner />
    </LoadingPage>
  );
};
