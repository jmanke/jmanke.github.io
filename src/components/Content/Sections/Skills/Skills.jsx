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

// find a better way to target the FadeSection with additional css
const Technologies = styled.div`
  .skills__technologies-container {
    position: relative;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .fill-circle {
    margin: 1rem;
  }

  @media screen and (max-width: ${styleVars.mobileWidth}) {
    margin: 4rem 0;
  }
`

const Languages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;

  @media screen and (max-width: ${styleVars.mobileWidth}) {
    grid-template-columns: 1fr;
    width: 100%;
    margin: auto;
  }
`

export default () => {
  return (
    <Skills>
      <Technologies>
        <FadeSection className="skills__technologies-container" delay={200}>
          <FillCircle label={"Unity"} fill={90} />
          <FillCircle label={".NET"} fill={80} />
          <FillCircle label={"Git"} fill={70} />
          <FillCircle label={"React.js"} fill={60} />
        </FadeSection>
      </Technologies>
      <FadeSection>
        <SkillsHeading className="skills__heading">Languages</SkillsHeading>
      </FadeSection>
      <Languages>
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
      </Languages>
    </Skills>
  );
};
