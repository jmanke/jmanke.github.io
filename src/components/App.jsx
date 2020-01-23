import React from "react";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import LoadingScreen from "./LoadingScreen";

export default () => {
  return (
  <div className="app">
    <LoadingScreen />
    <Nav />
    <Content />
    <Footer />
  </div>
)};
