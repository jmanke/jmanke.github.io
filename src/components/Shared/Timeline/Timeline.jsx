import React from "react";
import FadeSection from "../FadeSection/FadeSection"
import "./Timeline.css";

const eventInfoBox = (title, description) => (
  <div className="event-info-box">
    <h4 className="info-box-title">
      {title}
    </h4>
    <p className="info-box-description txt-description">
      {description}
    </p>
  </div>
);

const timelineEvent = (timelineEventInfo) => (
  <div key={timelineEventInfo.key} className={"timeline-event" + (timelineEventInfo.key % 2 === 0 ? "" : " reverse")}>
    <div className="event-item">
      <div className="event-time">
        <h4 className="txt-date">{timelineEventInfo.month + " " + timelineEventInfo.year}</h4>
      </div>
    </div>
    <div className="event-item">
      <div className="event-node" />
    </div>
    <div className="event-item">
      {eventInfoBox(timelineEventInfo.title, timelineEventInfo.description)}
    </div>
  </div>
);

export default props => {
  return (
    <div className="timeline">
      <div className="timeline-line-container">
        {/* mimic the behaviour of the timeline grid to correctly place the line */}
        <div></div> 
        <div className="timeline-line" />
        <div></div>
      </div>
      <FadeSection delay={200}>
        {props.timelineEvents.reverse().map( timelineEventInfo => timelineEvent(timelineEventInfo))}
      </FadeSection>
    </div>
  );
};
