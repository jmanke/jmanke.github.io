import React from "react";
import ResumeItem from "../../ResumeItem";
import FadeSection from "../../../Shared/FadeSection/FadeSection";
import Timeline from "../../../Shared/Timeline/Timeline";

function createTimelineEvent(key, title, year, month, description) {
  return {
    key: key,
    title: title,
    year: year,
    month: month,
    description: description
  };
}

export default () => {
  return (
    <div className="education section-container">
      <FadeSection>
        <Timeline
          range={[2012, 2020]}
          timelineEvents={[
            createTimelineEvent(
              0,
              "Began Courses at UVic",
              2012,
              "Sep",
              "Attended the Univeristy of Victoria to pursue a BA in Economics"
            ),
            createTimelineEvent(
              1,
              "Minor in Computer Science",
              2015,
              "Jan",
              "Started to pursue a Minor in Computer Science with a Major in Economics"
            ),
            createTimelineEvent(
              2,
              "Major in Computer Science",
              2016,
              "Sep",
              "Pursued a BSc, Double Major in Computer Science and Economics"
            ),
            createTimelineEvent(
              3,
              "Job at the Canada Revenue Agency",
              2016,
              "Apr",
              "Started work at the Canada Revenue Agency as a Junior IT Analyst"
            ),
            createTimelineEvent(
              4,
              "Job at LlamaZOO",
              2017,
              "Sep",
              "Started work at LlamaZOO as a Software Developer"
            ),
            createTimelineEvent(
              5,
              "Completed All Courses",
              2019,
              "Dec",
              "Graduating with a BSc, Double Major in Computer Science and Economics (GPA: 3.7 / 4.0)"
            )
          ]}
        />
      </FadeSection>
    </div>
  );
};
