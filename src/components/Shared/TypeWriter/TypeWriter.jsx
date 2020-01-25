import React from "react";
import "./TypeWriter.css";

export default props => {
  const waitingOnUpdate = React.useRef(false);
  const [currTextIndex, setCurrTextIndex] = React.useState(0);
  const minDelay = 0.1;
	const maxDelay = 0.2;
	
	const textComplete = props.text.length === currTextIndex;

  if (!textComplete && !waitingOnUpdate.current) {
    waitingOnUpdate.current = true;

    setTimeout(() => {
      waitingOnUpdate.current = false;
      setCurrTextIndex(currTextIndex + 1);
    }, (Math.random() * (maxDelay - minDelay) + minDelay) * 1000);
  }

  return (
    <p className={"type-writer"}>
      {props.text.slice(0, currTextIndex)}
      <span className={textComplete ? "type-line blink" : "type-line"}>{"|"}</span>
    </p>
  );
};
