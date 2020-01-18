import React from "react";

export default (props) => {
  return (
    <h1 className="heading">
      {/* <span className="heading__tag unselectable">{"<"}</span> */}
      {props.title}
      {/* <span className="heading__tag unselectable">{">"}</span> */}
    </h1>
  )
};