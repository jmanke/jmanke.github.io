import React from "react";
import Card from "../../Card/Card";
import projectInfo from "./projectInfo";
import FadeSection from "../../../Shared/FadeSection/FadeSection";

export default () => {
  return (
    <div className="projects section-container">
      <div className="projects__grid">
        <FadeSection delay={200} className="grid-columns">
          {projectInfo.map(info => (
            <Card {...info} className="grid-column" />
          ))}
        </FadeSection>
      </div>
    </div>
  );
};
