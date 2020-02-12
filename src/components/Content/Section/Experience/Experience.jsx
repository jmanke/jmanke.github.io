import React from "react";
import styled from "styled-components";
import ResumeItem from "components/Shared/ResumeItem/ResumeItem";
import experienceInfo from "./experienceInfo";
import FadeSection from "components/Shared/FadeSection/FadeSection";

const Experience = styled.div``

export default () => {
  let i = 0;

  return (
    <Experience>
        {experienceInfo.map(info => (
          <FadeSection key={i++}>
            <ResumeItem {...info} />
          </FadeSection>
        ))}
    </Experience>
  );
};
