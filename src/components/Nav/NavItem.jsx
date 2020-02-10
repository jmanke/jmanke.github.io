import React from "react";
import styled from 'styled-components';
import StyleVars from "styleVars";
import FainkIcon from "components/Shared/FaLinkIcon";

const NavItem = styled.a`
  color: ${StyleVars.accentColor};
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: lighten(${StyleVars.accentColor}, 80%);
  }

  &.active {
    color: lighten(${StyleVars.accentColor}, 80%);
  }
`

export default props => {
  const [mouseHovering, setMouseHovering] = React.useState(false);

  return (
    <NavItem href={props.href} onMouseEnter={() => setMouseHovering(true)} onMouseLeave={() => setMouseHovering(false)}>
      <FainkIcon active={mouseHovering} icon={props.icon} />
    </NavItem>
  );
};
