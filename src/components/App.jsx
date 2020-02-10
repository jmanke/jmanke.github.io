import React from "react";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import Events from "./Shared/Events";

React.windowIsLoaded = React.windowIsLoaded ?? false;

window.onload = function() {
  Events.eventEmitter.dispatch("onWindowLoad", "");
  React.windowIsLoaded = true;
};

export default () => {
  require('intersection-observer');

  return (
  <div className="app">
    <LoadingScreen />
    <Nav />
    <Content />
    <Footer />
  </div>
)};
