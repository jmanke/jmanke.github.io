import React from "react";
import logo from "../../../../images/logo.png";
import Canvas from "./LandingCanvas";

export default () => {

  return (
    <div className="landing-page">
      <Canvas />
      <div className="landing-page__container">
        <img src={logo} alt="Jeff Manke Logo" className="landing-page__container__logo unselectable" />
        <h1 className="landing-page__container__title">
          Jeff Manke
        </h1>
        <h2 className="landing-page__container__subtitle">
          {"// Software Developer"}
        </h2>
      </div>
    </div>
  );
}