import React, { useState, useEffect } from "react";
import navLinks from "../navLinks";
import NavItem from "./NavItem";
import logo from "../../images/logo.png";
import { EventEmitter } from "../Shared/Events";

const navLogo = () => (
  <img className="logo" href="/" src={logo} alt="Jeff Manke" />
);

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

  function onSectionViewUpdate([title, intersectionHeight]) {
    internalLinks.map( navLink => navLink.sectionActive = false);
    let link = internalLinks.find( navLink => navLink.title === title);
    link["visibility"] = intersectionHeight;
    let max = internalLinks.reduce( (prev, curr) => curr.visibility > prev.visibility ? curr : prev );
    max.sectionActive = max.visibility > window.innerHeight / 2;

    setInternalLinks([...internalLinks]);
  }

  useEffect(() => {
    EventEmitter.subscribe("section_update", onSectionViewUpdate);

    return function cleanup () {
       EventEmitter.unsubscribe("section_update", onSectionViewUpdate);
    };
  });

  return (
    <nav className="nav">
      <div className="nav__start">
        <i tabIndex="-1" onClick={onMenuToggle} className="fas fa-bars menu-toggle"></i>
        {navLogo()}
        {internalLinks.map(link =>
          <NavItem
            {...link}
            showTooltip={true}
          />
        )}
      </div>
      <div className="nav__middle">
        {navLogo()}
      </div>
      <div className="nav__end">
        {externalLinks.map(link =>
          <NavItem 
            {...link}
            showTooltip={false}
          />
        )}
      </div>
      <div className={"nav__sidebar" + (sidebarActive ? " active" : "")}>
        <div className="nav__sidebar__header">
          <i tabIndex="-1" onClick={onMenuHide} className="fas fa-bars menu-toggle"></i>
          {navLogo()}
        </div>
        {internalLinks.map(link =>
          <div className="nav__sidebar__item" onClick={onMenuHide} key={link.key}>
            <NavItem
              {...link}
              showTooltip={false}
            />
          </div>
        )}
      </div>
      {sidebarActive ? <div className="shadow-screen" onClick={onMenuHide}></div> : null}
    </nav>
  );
}