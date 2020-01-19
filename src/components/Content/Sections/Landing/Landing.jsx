import React from "react";
import backgroundImage from "../../../../images/landing_background.png";
import logo from "../../../../images/logo_circle.png";
import Canvas from "./LandingCanvas";

export default () => {

  var imageStyle = {
    backgroundImage: 'url('+ backgroundImage +')'
  }

  return (
    <div className="landing-page">
      <Canvas />
      <div style={imageStyle} className="landing-page__container unselectable">
        <h1 className="landing-page__container__title">
          Jeff Manke
        </h1>
        <h2 className="landing-page__container__subtitle">
          {"// Software Developer"}
        </h2>
      </div>
      <img src={logo} alt="Jeff Manke Logo" className="landing-page__logo"/>
    </div>
  );
}