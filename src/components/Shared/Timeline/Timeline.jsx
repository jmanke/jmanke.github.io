import React from "react";
import FadeSection from "../FadeSection/FadeSection"
import "./Timeline.css";

const eventInfoBox = (title, description) => (
  <div className="timeline__event-info-box">
    <h4 className="timeline__event-info-box-title">
      {title}
    </h4>
    <p className="timeline__event-info-box-description">
      {description}
    </p>
  </div>
);

const timelineEvent = (timelineEventInfo) => (
  <div key={timelineEventInfo.key} className={"timeline__event" + (timelineEventInfo.key % 2 === 0 ? "" : " timeline__event_reverse")}>
    <div className="timeline__event-item">
      <div className="timeline__event-time">
        <h4 className="timeline__txt-date">{timelineEventInfo.month + " " + timelineEventInfo.year}</h4>
      </div>
    </div>
    <div className="timeline__event-item">
      <div className="timeline__event-node" />
    </div>
    <div className="timeline__event-item">
      {eventInfoBox(timelineEventInfo.title, timelineEventInfo.description)}
    </div>
  </div>
);

export default props => {
  return (
    <div className="timeline">
      <div className="timeline__line-container">
        {/* mimic the behaviour of the timeline grid to correctly place the line */}
        <div></div> 
        <div className="timeline__line" />
        <div></div>
      </div>
      <FadeSection delay={200}>
        {props.timelineEvents.reverse().map( timelineEventInfo => timelineEvent(timelineEventInfo))}
      </FadeSection>
    </div>
  );
};
