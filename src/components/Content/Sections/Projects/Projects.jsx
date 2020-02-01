import React from "react";
import Card from "../../ProjectCard/ProjectCard";
import projectInfo from "./projectInfo";
import FadeSection from "../../../Shared/FadeSection/FadeSection";

export default () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        <FadeSection delay={200} className="projects-grid__columns">
          {projectInfo.map(info => (
            <Card {...info} className="projects-grid__column" />
          ))}
        </FadeSection>
      </div>
    </div>
  );
};
