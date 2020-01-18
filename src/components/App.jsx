import React from "react";
import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import LineNumbers from "./LineNumbers";

export default () => {
  return (
  <div className="app">
    <Nav />
    <Content />
    <LineNumbers />
  </div>
)};
