import React from "react";
import ResumeItem from "../../ResumeItem";
import FadeSection from "../../../Shared/FadeSection/FadeSection";

export default () => {
  return (
    <div className="education section-container">
      <FadeSection>
        <ResumeItem
          company={"University of Victoria"}
          period={"2012 - 2019"}
          position={
            "Bachelor of Science, Double Major in Computer Science and Economics (GPA: 3.7 / 4.0)"
          }
          location={"Victoria, BC"}
          description={"Some random text"}
        />
      </FadeSection>
    </div>
  );
};
