import React from "react";
import Section from "./Section";
import LandingPage from "./Sections/Landing/Landing";
import About from "./Sections/About";
import Experience from "./Sections/Experience/Experience";
import Projects from "./Sections/Projects/Projects";
import Education from "./Sections/Education/Education";
import Contact from "./Sections/Contact";
//import Resume from "./Sections/Resume";

export default () => (
  <div className="content">
    <LandingPage />
    <Section children={<About />} className={"section-about"} title={"About"} bgColor={"bg-primary"} />
    <Section children={<Experience />} className={"section-experience"} title={"Experience"} bgColor={"bg-secondary"} />
    <Section children={<Projects />} className={"section-projects"} title={"Projects"} bgColor={"bg-primary"} />
    <Section children={<Education />} className={"section-education"} title={"Education"} bgColor={"bg-secondary"} />
    <Section children={<Contact />} className={"section-contact"} title={"Contact"} bgColor={"bg-dark"} />
  </div>
);