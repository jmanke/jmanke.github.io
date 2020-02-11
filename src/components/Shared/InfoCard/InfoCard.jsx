import React from "react";
import styled from "styled-components";

const InfoCard = styled.div`
  width: ${props => props.primary ? `22em` : `18em`};
  height: ${props => props.primary ? '26.84em' : `21.96em`};
  background-color: white;
  box-shadow: 0 0 7px rgb(175, 207, 228);
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  margin: 1em;

  &:hover {
    box-shadow: 0 0 10px rgb(175, 207, 228);
  }

  @media screen and (max-width: 767px) {
    height: fit-content;
  }
`

const IconContainer = styled.div`
  width: 100%;
  height: ${props => props.primary ? `12em` : `10em`};
  display: flex;
`

const Icon = styled.img`
  height: 60%;
  margin: auto;
`

const Title = styled.h3`
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;
  color: ${props => props.primary ? `#FFFFFF` : `#1C6FA2`};
  background-color: ${props => props.primary ? `#1C6FA2` : `#FFFFFF`};
  margin-top: 0;
  margin-bottom: 0rem;
`

const TextContainer = styled.div`
  width: 100%;
  height: 55%;
  background-color: ${props => props.primary ? `#FFFFFF` : `#1C6FA2`};
  display: flex;

  @media screen and (max-width: 767px) {
    height: fit-content;
  }
`

const Description = styled.p`
  margin: auto;
  text-align: center;
  padding: 5%;
  height: 85%;
  color: ${props => props.primary ? `#1C6FA2` : `#FFFFFF`};
`

export default props => {
  return (
    <InfoCard className={props.className ?? ""} primary={props.primary}>
      <IconContainer primary={props.primary}>
        <Icon src={props.icon} alt={props.iconAlt ?? "icon"} />
      </IconContainer>
      <Title primary={props.primary}>
        {props.title}
      </Title>
      <TextContainer primary={props.primary}>
        <Description primary={props.primary}>
          {props.text}
        </Description>
      </TextContainer>
    </InfoCard>
  )
}