import React from "react";
import styled from "styled-components";

const Button = styled.button`
  /* default for <button>, but useful for <a> */
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: white;
  outline: none;
  border: none;
  white-space: nowrap;
  width: fit-content;
  height: fit-content;

  outline: 1px solid #696969;

  /* create a small space when buttons wrap on 2 lines */
  //margin: 2px 0;

  /* size comes from text & padding (no width/height) */
  padding: 0.5em 1em;

  /* make sure colors have enough contrast! */
  color: #1E1E1E;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: #1C6FA2;
    outline-color: #1C6FA2;
    color: white;
  }

  &:active {
    outline-color: #1C6FA2;
    transform: translateY(1px);
  }

  &:focus {
    background-color: #1C6FA2;
    outline-color: #1C6FA2;
    color: white;
  }
`

export default props => {
  return (
    <Button onClick={props.onClick}>
      {props.children}
    </Button>
  );
};
