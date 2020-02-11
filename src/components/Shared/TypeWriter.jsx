import React from "react";
import styled from "styled-components";

const TypeWriter = styled.p`
  position: relative;
  font-size: 2em;
  color: #6a9955;
`

const TypeWriterLine = styled.span`
  color: white;
  font-size: 120%;
	animation: ${props => props.blink ? `blinking 1s infinite` : `none`};

  @keyframes blinking {
	0% {
		opacity: 0;
	}
	
	49% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 1;
	}
}
`

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
    <TypeWriter>
      {props.text.slice(0, currTextIndex)}
      <TypeWriterLine blink={textComplete}>{"|"}</TypeWriterLine>
    </TypeWriter>
  );
};
