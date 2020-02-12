import React from "react";
import styled from "styled-components";
import closeImg from "./close.svg";

const CloseButton = styled.img`
  position: absolute;
  top: 0em;
  right: 0em;
  font-size: 2em;
  width: 1.1rem;
  padding: 1rem;
  opacity: 0.8;
  color: #3b3b3b;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px);
    will-change: transform;
  }
`

// props.onClick: your callback on click
export default props => {
  return (
    <CloseButton src={closeImg} alt={"close"} className={props.className ?? ""} onClick={props.onClick} />
  )
};
