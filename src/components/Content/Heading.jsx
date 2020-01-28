import React from "react";

export default props => {
  return (
    <h1 className={"heading " + (props.className ?? "")}>{props.title}</h1>
  );
};
