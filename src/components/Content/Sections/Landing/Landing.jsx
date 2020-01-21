import React, { useState } from "react";
import backgroundImage from "../../../../images/landing_background.png";
import logo from "../../../../images/logo_circle.png";
import Canvas from "./LandingCanvas";
import IntersectionObserver from "../../../Shared/IntersectionObserver";

export default () => {
  const landingRef = React.useRef();
  const [logoVisible, setLogoVisible] = useState(false);
  const showLogoThresh = 0.85;

  let imageStyle = {
    backgroundImage: 'url(' + backgroundImage + ')'
  }

  function handleLogoDisplay(intersectionInfo) {
    setLogoVisible(intersectionInfo[0].intersectionRatio < showLogoThresh ? true : false);
  }

  return (
    <div className="landing-page" ref={landingRef}>
      <IntersectionObserver 
        onChange={handleLogoDisplay} 
        threshold={[showLogoThresh]}
        />
      <Canvas />
      <div style={imageStyle} className="landing-page__container unselectable">
        <h1 className="landing-page__container__title">
          Jeff Manke
        </h1>
        <h2 className="landing-page__container__subtitle">
          {"// Software Developer"}
        </h2>
      </div>
      <img src={logo} alt="Jeff Manke Logo" 
        className={"landing-page__logo" + (logoVisible ? " is-visible" : "")} />
    </div>
  );
}