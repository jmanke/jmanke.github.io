import React from "react";
import logo from "../../../../images/logo_circle.png";
import Canvas from "./LandingCanvas";
import IntersectionObserver from "../../../Shared/IntersectionObserver";
import TypeWriter from "../../../Shared/TypeWriter/TypeWriter";
import Events from "../../../Shared/Events";

export default () => {
  const landingRef = React.useRef();
  const [logoVisible, setLogoVisible] = React.useState(false);
  const [subtitleVisible, setSubtitleVisible] = React.useState(false);
  const showLogoThresh = 0.85;

  function handleLogoDisplay(intersectionInfo) {
    setLogoVisible(
      intersectionInfo[0].intersectionRatio < showLogoThresh ? true : false
    );
  }

  function onWindowLoad() {
    setSubtitleVisible(true);
  }

  React.useEffect(() => {
    if (React.windowIsLoaded && !subtitleVisible) {
      onWindowLoad();
    }

    if (!React.windowIsLoaded && !subtitleVisible) {
      Events.eventEmitter.subscribe("onWindowLoad", onWindowLoad);

      return () =>
        Events.eventEmitter.unsubscribe("onWindowLoad", onWindowLoad);
    }
  });

  return (
    <div className="landing-page" ref={landingRef}>
      <div className="landing-page__content">
        <IntersectionObserver
          onChange={handleLogoDisplay}
          threshold={[showLogoThresh]}
        />
        <Canvas />
        <div className="landing-page__container unselectable">
          <h1 className="landing-page__container-title">Jeff Manke</h1>
          {subtitleVisible ? (
            <TypeWriter text={"// Software Developer "} />
          ) : null}
        </div>
        <div className="landing-page__logo-anchor">
          <img
            src={logo}
            alt="Jeff Manke Logo"
            className={
              "landing-page__logo unselectable" +
              (logoVisible ? " landing-page__logo_is-visible" : "")
            }
          />
        </div>
      </div>
    </div>
  );
};
