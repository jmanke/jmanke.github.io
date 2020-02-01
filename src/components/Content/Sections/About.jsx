import React from "react";
import jeffImg from "../../../images/jeff.jpg";
import FadeSection from "../../Shared/FadeSection/FadeSection";
import FillBar from "../../Shared/FillBar/FillBar";
import InfoCard from "../../Shared/InfoCard/InfoCard";

function createSkill(label, fill) {
  return <FillBar label={label} fill={fill} />;
}

function createCard() {

}

export default () => {
  return (
    <div className="about">
      <FadeSection>
        <div className="about__info">
          <InfoCard
            title={"Development"}
            secondary={true}
            icon={<i class="fa-icon fas fa-laptop-code"></i>}
            text={"Whether its writing highly optimized and multi-threaded \
            C#/C++ code, or front end development with JavaScript and React.js, \
            I love taking on new challenges and solving problems."}
          />
          <InfoCard
            className="info-card__about-me"
            title={"About Me"}
            icon={<i class="fa-icon far fa-user"></i>}
            text={"Hello, my name is Jeff Manke and I am a Software Developer \
            living in Victoria, BC. I have a Bachelor of Science, Double Major \
            in Computer Science and Economics from the Univeristy of Victoria. \
            Ever since I took Computer Science as my second major, I have been \
            spending almost all of my time programming and learning new \
            technologies."}
          />
          <InfoCard
            title={"Hobbies"}
            secondary={true}
            icon={<i class="fa-icon fas fa-gamepad"></i>}
            text={"Playing video games is by far my favourite hobby. Some of my favourite \
        games are Kerbal Space Program, Halo, The Witcher 3, and The Outer Wilds."}
          />
        </div>
        <div className="skills">
          <FadeSection className="skills__languages" delay={100}>
            <h3 className="skills__heading">Languages</h3>
            {createSkill("C#", 85)}
            {createSkill("C++", 70)}
            {createSkill("HTML5", 70)}
            {createSkill("CSS", 70)}
            {createSkill("Java", 65)}
            {createSkill("JavaScript", 60)}
          </FadeSection>

          <FadeSection className="skills__technologies" delay={100}>
            <h3 className="skills__heading">Technologies</h3>
            {createSkill("Unity", 90)}
            {createSkill(".NET", 80)}
            {createSkill("React.js", 60)}
          </FadeSection>
        </div>
      </FadeSection>
    </div>
  );
};
