import React from "react";
import styled from 'styled-components';
import NavItem from "components/Nav/NavItem";
import resume from "resources/ResumeJeffManke.pdf"

const Footer = styled.footer`
  position: absolute;
  left: var(--margin-left); 
  right: 0;
  background-color: var(--primary-color-dark);
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (max-width: 767px) {
    left: 0;
  }
`

const FooterLinks = styled.div`
  display: flex;
  font-size: 1.5em;
`

const FlexContainer = styled.div`
  display: flex;
`

const Email = styled.a`
  align-self: center;
  color: var(--highlight-blue);
  text-decoration: none;

  &:hover {
    color: lighten(var(--highlight-blue), 10%);
    text-decoration: underline;
  }

  &:active {
    color: var(--highlight-blue);
  }
`

const EmailLabel = styled.p`
  align-self: center;
  padding-right: 0.5rem;
  color: var(--accent-color);
`

const Copyright = styled.i`
  font-size: 0.8em;
  opacity: 0.75;
  margin-top: 0.5rem;
  color: var(--accent-color);
`

export default () => {
  return (
    <Footer>
      <FooterLinks>
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
      </FooterLinks>
      <FlexContainer>
        <EmailLabel>Email: </EmailLabel>
        <Email href={"mailto:jeffman879@gmail.com"} alt="Resume">jeffman879@gmail.com</Email>
      </FlexContainer>
      <Copyright className="far fa-copyright txt-sm txt-light"> 2020 Jeff Manke</Copyright>
    </Footer>
  )
};
