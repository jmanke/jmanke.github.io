import React from "react";
import ResumeItem from "../../ResumeItem";

export default () => {
  return (
    <div className="education section-container">
     <ResumeItem 
      company={"University of Victoria"}
      period={"2012 - 2019"}
      position={"Bachelor of Science, Double Major in Computer Science and Economics (GPA: 3.7 / 4.0)"}
      location={"Victoria, BC"}
      description={"Some random text"}
     />
    </div>
  );
}