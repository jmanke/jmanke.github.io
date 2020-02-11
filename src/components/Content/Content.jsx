import React from "react";
import styled from "styled-components";
import styleVars from "styleVars";
import Section from "./Section";
import LandingPage from "./Sections/Landing/Landing";
import About from "./Sections/About";
import Experience from "./Sections/Experience/Experience";
import Projects from "./Sections/Projects/Projects";
import Education from "./Sections/Education/Education";
import Contact from "./Sections/Contact";
import Skills from "./Sections/Skills/Skills";

const Content = styled.div`
  position: relative;
  margin-left: ${styleVars.marginLeft};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${styleVars.mobileWidth}) {
    margin-left: 0;
  }
`

export default () => (
  <Content>
    <LandingPage />
    <Section children={<About />} className={"about"} title={"About"} bgColor={"bg-primary"} />
    <Section children={<Skills />} className={"skills"} title={"Skills"} bgColor={"bg-secondary"} />
    <Section children={<Experience />} className={"experience"} title={"Experience"} bgColor={"bg-primary"} />
    <Section children={<Projects />} className={"projects"} title={"Projects"} bgColor={"bg-secondary"} />
    <Section children={<Education />} className={"education"} title={"Education"} bgColor={"bg-primary"} />
    <Section children={<Contact />} className={"contact"} title={"Contact"} bgColor={"bg-dark"} headingColor={`#FFFFFF`} />
  </Content>
);