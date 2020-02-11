import React from "react";
import styled from "styled-components";
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
  margin-left: var(--margin-left);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`

export default () => (
  <Content>
    <LandingPage />
    <Section children={<About />} className={"about"} title={"About"} bgColor={"#FFFFFF"} />
    <Section children={<Skills />} className={"skills"} title={"Skills"} bgColor={"#F3F3F3"} />
    <Section children={<Experience />} className={"experience"} title={"Experience"} bgColor={"#FFFFFF"} />
    <Section children={<Projects />} className={"projects"} title={"Projects"} bgColor={"#F3F3F3"} />
    <Section children={<Education />} className={"education"} title={"Education"} bgColor={"#FFFFFF"} />
    <Section children={<Contact />} className={"contact"} title={"Contact"} bgColor={"#3B3B3B"} headingColor={`#F3F3F3`} />
  </Content>
);