import React, { useState, useEffect } from "react";
import styled from "styled-components";
import navLinks from "../navLinks";
import NavItem from "./NavItem";
import NavItemSideBar from "./NavItemSideBar";
import NavItemSideMenu from "./NavItemSideMenu";
import logo from "images/logo.png";
import Events from "components/Shared/Events";

// TODO: Revisit this and break it into smaller components. This is a relic of when I 
// first started learning React. 

const Logo = styled.img`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`

const navLogo = () => (
  <Logo className="logo" href="" src={logo} alt="Jeff Manke" onClick={() => {
    window.location.href = "#";
    document.location.reload();
  }} />
);

const Nav = styled.nav`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  font-size: 1.25em;
  z-index: 10;
  flex-direction: column;
  width: var(--margin-left);
  height: 100vh;
  background-color: var(--secondary-color);
  border-style: none solid none none;
  border-width: 1px;
  border-color: var(--secondary-color);
  overflow-y: auto;
  overflow-x: visible;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    min-width: 200px;
    width: 100%;
    height: var(--margin-top);
    border-style: none none solid none;
    border-width: 1px;
    overflow: initial;
  }
`

const MenuToggle = styled.div`
  color: var(--accent-color);
  margin-right: auto;
  filter: brightness(120%);
  padding-left: 0.5em;
  display: none;
  font-size: 1.5em;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    display: initial;
  }

  @media screen and (max-width: 200px) {
    display: initial;
    padding-left: 0.1em;
  }
`

const NavStart = styled.div`
  padding-top: 1em;
  display: inherit;
  flex-direction: inherit;
  background-color: inherit;

  @media screen and (max-width: 767px) {
    padding-top: initial;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: auto;
    margin-bottom: 1em;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`

const NavMiddle = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .logo {
    margin: auto;
    display: none;
    pointer-events: initial;

    @media screen and (max-width: 767px) {
      padding: 0;
      display: initial;
    }

    @media screen and (max-width: 400px) {
      margin-right: auto;
      margin-left: 3em;
    }
  }
`

const NavEnd = styled.div`
  background-color: inherit;
  display: inherit;
  flex-direction: inherit;
  margin-top: auto;
  margin-bottom: 0.75em;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-top: initial;
    margin-right: 1em;
    margin-bottom: initial;
  }
`

const NavSideBar = styled.div`
  background-color: inherit;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15rem;
  transform: ${props => props.active ? `transform: none` : `translateX(-100%)`};
  display: none;
  transition: all 0.25s ease-out;
  z-index: 3;
  overflow-y: auto;

  border-style: none solid none none;
  border-width: 1px;
  border-color: var(--text-color);

  @media screen and (max-width: 767px) {
    display: block;
  }
`

const NavSideBarHeader = styled.div`
  height: var(--margin-top);
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    margin-left: auto;
    margin-right: 0.75em;
  }
`

export default () => {
  const externalLinks = navLinks.filter(x => x.href[0] !== '#');
  const [sidebarActive, setSidebarActive] = useState(false);
  const [internalLinks, setInternalLinks] = useState(navLinks.filter(x => x.href[0] === '#'));

  function onMenuToggle() {
    setSidebarActive(!sidebarActive);
  }

  function onMenuHide() {
    setSidebarActive(false);
  }

  function onSectionViewUpdate([title, observerInfo]) {
    internalLinks.map(navLink => navLink.sectionActive = false);
    let link = internalLinks.find(navLink => navLink.title === title);
    link.visibility = observerInfo.intersectionRect.height;
    let max = internalLinks.reduce((prev, curr) => curr.visibility > prev.visibility ? curr : prev);
    max.sectionActive = max.visibility > window.innerHeight / 4;

    setInternalLinks([...internalLinks]);
  }

  useEffect(() => {
    Events.eventEmitter.subscribe("section_update", onSectionViewUpdate);

    return function cleanup() {
      Events.eventEmitter.unsubscribe("section_update", onSectionViewUpdate);
    };
  });

  return (
    <Nav>
      <NavStart>
        <MenuToggle tabIndex="-1" onClick={onMenuToggle} className="fas fa-bars" />
        {navLogo()}
        {internalLinks.map(link =>
          <NavItemSideBar
            {...link}
          />
        )}
      </NavStart>
      <NavMiddle>
        {navLogo()}
      </NavMiddle>
      <NavEnd>
        {externalLinks.map(link =>
          <NavItem
            {...link}
          />
        )}
      </NavEnd>
      <NavSideBar active={sidebarActive}>
        <NavSideBarHeader>
          <MenuToggle tabIndex="-1" onClick={onMenuHide} className="fas fa-bars"></MenuToggle>
          {navLogo()}
        </NavSideBarHeader>
        {internalLinks.map(link =>
          <NavItemSideMenu
            {...link}
          />
        )}
      </NavSideBar>
      {sidebarActive ? <div className="shadow-screen" onClick={onMenuHide}></div> : null}
    </Nav>
  );
}