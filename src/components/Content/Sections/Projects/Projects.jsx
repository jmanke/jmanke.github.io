import React from "react";
import Card from "../../Card/Card";
import projectInfo from "./projectInfo";

function createCard(title, cardText, overviewItems) {
  return (
    <Card 
      title={title}
      cardText={cardText}
      overviewItems={overviewItems}
    />
  );
}

export default () => {
  return (
    <div className="projects section-container">
      <div className="projects__grid">
        {projectInfo.map( info => <Card {...info} />)}
      </div>
    </div>
  );
}