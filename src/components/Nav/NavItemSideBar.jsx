import React from "react";
import styled from 'styled-components';
import StyleVars from "styleVars";
import Tooltip from "components/Shared/Tooltip";
import FaLinkIcon from "components/Shared/FaLinkIcon";

const NavItem = styled.a`
  position: relative;
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  padding: 0.5em;

  @media screen and (max-width: ${StyleVars.mobileWidth}) {
    display: none;
  }
`

// also put in its own component?
const ActiveBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.15em;
  height: 100%;
  transform: ${props => props.sectionActive ? "none" : "scale(0)"};
  background-color: ${StyleVars.highlightBlue};
  transition: all 0.25s ease-out;
`

export default props => {
  const [mouseHovering, setMouseHovering] = React.useState(false);

  return (
    <NavItem href={props.href} onMouseEnter={() => setMouseHovering(true)} onMouseLeave={() => setMouseHovering(false)}>
      <FaLinkIcon active={mouseHovering || props.sectionActive} icon={props.icon} />
      <ActiveBar sectionActive={props.sectionActive} />
      <Tooltip label={props.title} visible={mouseHovering} paddingLeft={15} />
    </NavItem>
  );
};
