import React from "react";
import styled from "styled-components";

const ResumeItem = styled.div`
  padding: 2rem 0;
`

const Header = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  p {
    margin: 0;
  }
`

const HeaderPrimary = styled.div`
  margin-right: auto;
  padding-right: 2rem;
  width: 60%;

  @media screen and (max-width: 767px) {
    margin-right: initial;
  }
`

const HeaderSecondary = styled.div`
  margin-left: auto;
  text-align: right;

  @media screen and (max-width: 767px) {
    margin-left: initial;
    text-align: initial;
  }
`

const TextCompany = styled.h4`
  margin: 0;
  padding: 0.5rem 0;
`

const TextPosition = styled.p`
  color: #1e1e1e;
  padding: 0.5rem 0;
`

const TextSmall = styled.p`
  color: #1e1e1e;
  font-size: 0.9em;
`

const Content = styled.div`
  margin-left: auto;
  line-height: 1.5em;
  width: 100%;
`

const Description = styled.p``

export default props => {
  return (
    <ResumeItem className={props.className ?? ""}>
      <Header>
        <HeaderPrimary>
          <TextCompany><strong>{props.company}</strong></TextCompany>
          <TextPosition>{props.position}</TextPosition>
        </HeaderPrimary>
        <HeaderSecondary>
          <TextSmall>{props.period}</TextSmall>
          <TextSmall>{props.location}</TextSmall>
        </HeaderSecondary>
      </Header>
      <Content>
        <Description>{props.description}</Description>
      </Content>
    </ResumeItem>
  );
};
