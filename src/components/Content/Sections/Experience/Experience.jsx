import React from "react";
import ResumeItem from "../../ResumeItem";
import experienceInfo from "./experienceInfo";
import FadeSection from "../../../Shared/FadeSection";

export default () => {
  return (
    <div className="experience section-container">
        {experienceInfo.map(info => (
          <FadeSection>
            <ResumeItem {...info} />
          </FadeSection>
        ))}
    </div>
  );
};
