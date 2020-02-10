import React from "react";
import styled from 'styled-components';
import StyleVars from "styleVars";
import FaLinkIcon from "components/Shared/FaLinkIcon";

const NavItem = styled.a`
  position: relative;
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  padding-left: 0.75em;
  
  border-bottom-style: solid;
  border-bottom-color: ${StyleVars.textColorLight};
  border-bottom-width: 1px;

  &:hover {
    color: white;
  }
`

const Label = styled.p `
  color: ${StyleVars.accentColor};
  padding: 0.5em;
`

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
  return (
    <NavItem href={props.href}>
      <FaLinkIcon active={props.sectionActive} icon={props.icon} />
      <Label>{props.title}</Label>
      <ActiveBar sectionActive={props.sectionActive} />
    </NavItem>
  );
};
