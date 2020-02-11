import React from "react";
import styled from "styled-components";
import FadeSection from "components/Shared/FadeSection/FadeSection";
import TimelineEvent from "./TimelineEvent";

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  width: 70%;
  height: fit-content;
  z-index: 1;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const LineContainer = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  grid-template-columns: 1fr 0.15fr 1fr;
  pointer-events: none;

  @media screen and (max-width: 767px) {
    grid-template-columns: 0.2fr 0.2fr 1fr;
  }
`

const Line = styled.div`
  position: relative;
  margin: auto;
  height: 100%;
  width: 0.15em;
  background-color: #1C6FA2;
  z-index: -1;
`

export default props => {
  let i = 0;

  return (
    <Timeline>
      <LineContainer>
        {/* mimic the behaviour of the timeline grid to correctly place the line */}
        <div></div> 
        <Line />
        <div></div>
      </LineContainer>
      <FadeSection delay={200}>
        {props.timelineEvents.reverse().map( timelineEventInfo => <TimelineEvent key={i} id={i++} {...timelineEventInfo} />)}
      </FadeSection>
    </Timeline>
  );
};
