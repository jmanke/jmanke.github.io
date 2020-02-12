import React from "react";
import styled from "styled-components";
import FadeSection from "components/Shared/FadeSection/FadeSection";
import InfoCard from "components/Shared/InfoCard/InfoCard";
import developmentImg from "images/monitor.svg";
import manImg from "images/man.svg";
import hobbyImg from "images/coin.svg";

const InfoCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    
    .info-card__development{
      order: 2;
      width: 45%;
    }

    .info-card__about-me {
      order: 1;
      width: 100%;
    }

    .info-card__hobbies {
      order: 3;
      width: 45%;
    }
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    
    .info-card__development{
      width: 100%;
    }

    .info-card__about-me {
      width: 100%;
    }

    .info-card__hobbies {
      width: 100%;
    }
  }
`

export default () => {
  return (
    <FadeSection>
      <InfoCardsContainer>
        <InfoCard
          className="info-card__development"
          title={"Development"}
          secondary={true}
          icon={developmentImg}
          text={
            "Whether its writing efficient, multi-threaded \
            C# or C++ code, or front-end with JavaScript and React, \
            I love taking on new challenges and solving problems."
          }
        />
        <InfoCard
          className="info-card__about-me"
          title={"About Me"}
          icon={manImg}
          text={
            "My name is Jeff Manke and I'm a Software Developer \
          living in Victoria, BC. I have a BSc, Double Major \
          in Computer Science and Economics from the Univeristy of Victoria. \
          Since taking Computer Science as a second major, I \
          spend most of my time programming and learning new \
          technologies."
          }
          primary
        />
        <InfoCard
          className="info-card__hobbies"
          title={"Hobbies"}
          secondary={true}
          icon={hobbyImg}
          text={
            "Playing video games is one of my favourite hobbies. Some of my favourite \
      games are Kerbal Space Program, Halo, The Witcher 3, and The Outer Wilds."
          }
        />
      </InfoCardsContainer>
    </FadeSection>
  );
};
