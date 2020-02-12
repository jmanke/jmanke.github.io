import React from "react";
import styled from "styled-components";
import FadeSection from "components/Shared/FadeSection/FadeSection";
import Timeline from "components/Shared/Timeline/Timeline";

const Education = styled.div``

function createTimelineEvent(title, year, month, description) {
  return {
    title: title,
    year: year,
    month: month,
    description: description
  };
}

export default () => {
  return (
    <Education>
      <FadeSection>
        <Timeline
          range={[2012, 2020]}
          timelineEvents={[
            createTimelineEvent(
              "Began Courses at UVic",
              2012,
              "Sep",
              "Attended the Univeristy of Victoria to pursue a BA in Economics"
            ),
            createTimelineEvent(
              "Minor in Computer Science",
              2015,
              "Jan",
              "Started to pursue a Minor in Computer Science with a Major in Economics"
            ),
            createTimelineEvent(
              "Major in Computer Science",
              2016,
              "Sep",
              "Pursued a BSc, Double Major in Computer Science and Economics"
            ),
            createTimelineEvent(
              "Job at the Canada Revenue Agency",
              2016,
              "Apr",
              "Started work at the Canada Revenue Agency as a Junior IT Analyst"
            ),
            createTimelineEvent(
              "Job at LlamaZOO",
              2017,
              "Sep",
              "Started work at LlamaZOO as a Software Developer"
            ),
            createTimelineEvent(
              "Completed All Courses",
              2019,
              "Dec",
              "Graduating with a BSc, Double Major in Computer Science and Economics (GPA: 3.7 / 4.0)"
            )
          ]}
        />
      </FadeSection>
    </Education>
  );
};
