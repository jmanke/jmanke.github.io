import React from "react";
import ResumeItem from "../../ResumeItem";
import experienceInfo from "./experienceInfo";

export default () => {
  return (
    <div className="experience section-container">
      {experienceInfo.map(info => (
        <ResumeItem {...info} />
      ))}
    </div>
  );
};
