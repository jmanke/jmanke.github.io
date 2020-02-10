import React from "react";
import styled from 'styled-components';
import StyleVars from "StyleVars";

// move to its own component, there is reuse here
const FaIcon = styled.i`
  color: ${StyleVars.accentColor};
  filter: ${props => props.active ? `brightness(150%)` : `none`};
  transform: ${props => props.active ? `scale(1.1)` : `none`};
  transition: all 0.15s ease;
`

export default props => {
  return (
    <FaIcon active={props.active} className={props.icon}>
    </FaIcon>
  );
};
