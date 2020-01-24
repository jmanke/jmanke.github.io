import React from "react";
import Card from "../../Card/Card";
import projectInfo from "./projectInfo";
import FadeSection from "../../../Shared/FadeSection";

function createCard(title, cardText, overviewItems) {
  return (
    <Card title={title} cardText={cardText} overviewItems={overviewItems} />
  );
}

export default () => {
  return (
    <div className="projects section-container">
      <FadeSection>
        <div className="projects__grid">
          <div className="grid-columns">
            {projectInfo.map(info => (
              <Card {...info} className="grid-column" />
            ))}
          </div>
        </div>
      </FadeSection>
    </div>
  );
};
