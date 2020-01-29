import React from "react";
import "./Timeline.css";

const eventInfoBox = (title, description) => (
  <div className="event-info-box">
    <h4 className="info-box-title">
      {title}
    </h4>
    <p className="info-box-description">
      {description}
    </p>
  </div>
);

const timelineEvent = (timelineEventInfo) => (
  <div className={"timeline-event" + (timelineEventInfo.key % 2 === 0 ? "" : " reverse")}>
    <div className="event-item">
      <div className="event-time">
        <p>{timelineEventInfo.month + " " + timelineEventInfo.year}</p>
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

  const timelineRef = React.useRef(null);

  React.useEffect(() => {
    console.log(timelineRef);
  });

  return (
    <div className="timeline">
      <div className="timeline-line-container">
        {/* mimic the behaviour of the timeline grid to correctly place the line */}
        <div></div> 
        <div className="timeline-line" ref={timelineRef} />
        <div></div>
      </div>
      {props.timelineEvents.reverse().map( timelineEventInfo => timelineEvent(timelineEventInfo))}
    </div>
  );
};
