import React from "react";
import styled from 'styled-components';
import StyleVars from "styleVars";
import FaLinkIcon from "components/Shared/FaLinkIcon";

const NavItem = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: ${props => props.size ? props.size : `1em`};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default props => {
  const [mouseHovering, setMouseHovering] = React.useState(false);

  return (
    <NavItem size={props.size} href={props.href} onMouseEnter={() => setMouseHovering(true)} onMouseLeave={() => setMouseHovering(false)}>
      <FaLinkIcon color={props.color} active={mouseHovering} icon={props.icon} />
    </NavItem>
  );
};
