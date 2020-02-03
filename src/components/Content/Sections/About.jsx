import React from "react";
import FadeSection from "../../Shared/FadeSection/FadeSection";
import InfoCard from "../../Shared/InfoCard/InfoCard";
import developmentImg from "../../../images/monitor.svg";
import manImg from "../../../images/man.svg";
import hobbyImg from "../../../images/coin.svg";

export default () => {
  return (
    <div className="about unselectable">
      <FadeSection>
        <div className="about__info">
          <InfoCard
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
          />
          <InfoCard
            title={"Hobbies"}
            secondary={true}
            icon={hobbyImg}
            text={
              "Playing video games is one of my favourite hobbies. Some of my favourite \
        games are Kerbal Space Program, Halo, The Witcher 3, and The Outer Wilds."
            }
          />
        </div>
      </FadeSection>
    </div>
  );
};
