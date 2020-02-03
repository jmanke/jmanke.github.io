import React from "react";
import NavItem from "../Nav/NavItem";
import resume from "../../resources/ResumeJeffManke.pdf"

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
          title={"Resume"}
          icon={"fas fa-file-pdf fa-fw"}
          href={resume}
          displayTitle={false}
          showTooltip={false}
        />
      </div>
      <a className="footer__mail" href={"mailto:jeffman879@gmail.com"} alt="Resume">jeffman879@gmail.com</a>
      <i className="far fa-copyright txt-sm txt-light"> 2020 Jeff Manke</i>
    </div>
  )
};
