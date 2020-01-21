import React from "react";
import Section from "./Section";
import LandingPage from "./Sections/Landing/Landing";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";
//import Resume from "./Sections/Resume";

export default () => (
  <div className="content">
    <LandingPage />
    <Section children={<About />} title={"About"} bgColor={"bg-primary"} />
    <Section children={<Experience />} title={"Experience"} bgColor={"bg-secondary"} />
    <Section children={<Projects />} title={"Projects"} bgColor={"bg-primary"} />
    <Section children={<Skills />} title={"Skills"} bgColor={"bg-secondary"} />
    <Section children={<Education />} title={"Education"} bgColor={"bg-primary"} />
    {/* <Section children={<Resume />} title={"Resume"} /> */}
  </div>
);