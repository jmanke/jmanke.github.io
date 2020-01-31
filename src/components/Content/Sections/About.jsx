import React from "react";
import jeffImg from "../../../images/jeff.jpg";
import FadeSection from "../../Shared/FadeSection/FadeSection";
import FillBar from "../../Shared/FillBar/FillBar";

function createSkill(label, fill) {
  return <FillBar label={label} fill={fill} />;
}

export default () => {
  return (
    <div className="about">
      <FadeSection>
        <div className="text-img-box">
          <p className="txt-md txt-one-half">
            Hello, my name is Jeff Manke and I am a Software Developer currently
            living in Victoria, BC. I have a Bachelor of Science, Double Major
            in Computer Science and Economics from the Univeristy of Victoria.
            Ever since I took Computer Science as my second major, I have been
            spending almost all of my time programming and learning new
            technologies. Whether its writing highly optimized and multithreaded
            C#/C++ code, or front end development with JavaScript and React.js,
            I love taking on new challenges and solving problems.
          </p>
          <img
            src={jeffImg}
            alt="Jeff Manke Hololens"
            className="text-img-box__img"
          />
        </div>
      </FadeSection>
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
    </div>
  );
};
