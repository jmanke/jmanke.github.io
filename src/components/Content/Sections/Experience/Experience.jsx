import React from "react";
import ResumeItem from "../../ResumeItem";
import experienceInfo from "./experienceInfo";
import FadeSection from "../../../Shared/FadeSection/FadeSection";

export default () => {
  let i = 0;

  return (
    <div className="experience section-container">
        {experienceInfo.map(info => (
          <FadeSection key={i++}>
            <ResumeItem {...info} />
          </FadeSection>
        ))}
    </div>
  );
};
