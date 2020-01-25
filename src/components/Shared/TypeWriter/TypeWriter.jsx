import React from "react";
import "./TypeWriter.css";

export default props => {
  const [currTextIndex, setCurrTextIndex] = React.useState(0);
  const minDelay = 0.1;
	const maxDelay = 0.2;
	
	const textCompelte = props.text.length === currTextIndex;

  if (!textCompelte) {
    setTimeout(() => {
      setCurrTextIndex(currTextIndex + 1);
    }, (Math.random() * (maxDelay - minDelay) + minDelay) * 1000);
  }

  return (
    <p className={"type-writer"}>
      {props.text.slice(0, currTextIndex)}
      <span className={textCompelte ? "type-line blink" : "type-line"}>{"|"}</span>
    </p>
  );
};
