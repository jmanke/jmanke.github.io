import React from "react";
import styled from "styled-components";
import styleVars from "styleVars";
import FadeSection from "components/Shared/FadeSection/FadeSection";
import FillCircle from "components/Shared/FillCircle/FillCircle";
import FillBar from "components/Shared/FillBar/FillBar";

const Skills = styled.div``

const SkillsHeading = styled.h3`
  margin: 5rem 0;
  text-align: center;
`

export default () => {
  return (
    <Skills>
      <FadeSection className="skills__technologies" delay={100}>
        <FillCircle label={"Unity"} fill={90} />
        <FillCircle label={".NET"} fill={80} />
        <FillCircle label={"Git"} fill={70} />
        <FillCircle label={"React.js"} fill={60} />
      </FadeSection>
      <FadeSection>
        <SkillsHeading className="skills__heading">Languages</SkillsHeading>
      </FadeSection>
      <div className="skills__languages">
        <FadeSection delay={100}>
          <FillBar label={"C#"} fill={85} />
          <FillBar label={"C++"} fill={70} />
          <FillBar label={"HTML5"} fill={70} />
        </FadeSection>
        <FadeSection delay={100}>
          <FillBar label={"CSS"} fill={70} />
          <FillBar label={"Java"} fill={65} />
          <FillBar label={"JavaScript"} fill={60} />
        </FadeSection>
      </div>
    </Skills>
  );
};
