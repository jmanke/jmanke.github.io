import React from "react";
import ResumeItem from "../../ResumeItem";
// MOVE RESUME ITEM DESCRIPTIONS TO ANOTHER JS FILE

export default () => {
  return (
    <div className="experience section-container">
      <ResumeItem
        company={"LlamaZOO Interactive Inc."}
        period={"Sep 2017 - Jan 2019"}
        position={"Software Developer"}
        description={"During my time at LlamaZOO, I "}
      />
      <ResumeItem
        company={"Canada Revenue Agency"}
        period={"Apr 2016 - Dec 2017"}
        position={"Junior IT Analyst"}
        description={"Some random text"}
      />
    </div>
  );
}