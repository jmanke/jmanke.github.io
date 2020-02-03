import React from "react";
import FadeSection from "../../../Shared/FadeSection/FadeSection";
import FillCircle from "../../../Shared/FillCircle/FillCircle";
import FillBar from "../../../Shared/FillBar/FillBar";

function createSkill(label, fill) {
  return <FillBar label={label} fill={fill} />;
}

export default () => {
  return (
    <div className="skills">
      {/* <FadeSection>
        <h3 className="skills__heading">Technologies</h3>
      </FadeSection> */}
      <FadeSection className="skills__technologies" delay={100}>
        <FillCircle label={"Unity"} fill={90} />
        <FillCircle label={".NET"} fill={80} />
        <FillCircle label={"Git"} fill={70} />
        <FillCircle label={"React.js"} fill={60} />
      </FadeSection>
      <FadeSection>
        <h3 className="skills__heading">Languages</h3>
      </FadeSection>
      <div className="skills__languages">
        <FadeSection delay={100}>
          {createSkill("C#", 85)}
          {createSkill("C++", 70)}
          {createSkill("HTML5", 70)}
        </FadeSection>

        <FadeSection delay={100}>
          {createSkill("CSS", 70)}
          {createSkill("Java", 65)}
          {createSkill("JavaScript", 60)}
        </FadeSection>
      </div>
    </div>
  );
};
