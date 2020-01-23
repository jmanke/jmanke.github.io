import React from "react";
import NavItem from "../Nav/NavItem";

export default () => {
  return (
  <div className="footer">
    <div className="footer__links">
      <NavItem 
      title={"GitHub"}
      icon={"fab fa-github-square fa-fw"}
      href={"https://github.com/jmanke"}
      displayTitle={false}
      showTooltip={false}
      />
       <NavItem 
      title={"LinkedIn"}
      icon={"fab fa-linkedin fa-fw"}
      href={"https://www.linkedin.com/in/jeff-manke/"}
      displayTitle={false}
      showTooltip={false}
      />
      <NavItem 
      title={"Mail"}
      icon={"fas fa-envelope fa-fw"}
      href={"mailto:jeffman879@gmail.com"}
      displayTitle={false}
      showTooltip={false}
      />
    </div>
    <i className="far fa-copyright txt-sm txt-light"> 2020 Jeff Manke</i>
  </div>
)};
