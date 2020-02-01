import React from "react";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import LoadingScreen from "./LoadingScreen";
import Events from "./Shared/Events";

React.windowIsLoaded = false;

export default () => {

  React.windowIsLoaded = React.windowIsLoaded ?? false;

  window.onload = function() {
    Events.eventEmitter.dispatch("onWindowLoad", "");
    React.windowIsLoaded = true;
  };

  return (
  <div className="app">
    <LoadingScreen />
    <Nav />
    <Content />
    <Footer />
  </div>
)};
