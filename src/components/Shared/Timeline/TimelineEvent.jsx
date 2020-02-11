import React from "react";
import styled from "styled-components";
import TimelineEventInfoBox from "./TimelineEventInfoBox";

const TimelineEvent = styled.div`
  padding: 1rem 0;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 0.15fr 1fr;
  transition: all 0.1s ease-in-out;
  direction: ${props => props.reverse ? `ltr` : `rtl`};

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 0.2fr 0.2fr 1fr;
    direction: ltr;
    text-align: right;
  }
`

const Item = styled.div`
  display: flex;
`

const Time = styled.div`
  width: 100%;
  text-align: right;
  margin-top: auto;
  margin-bottom: auto;
  text-align: ${props => props.reverse ? `right` : `left`};
`

const DateText = styled.h4`
  font-size: 1em;
  color: #696969;

  @media screen and (max-width: 767px) {
    text-align: right;
  }
`

const Node = styled.div`
  margin: auto;
  width: 1rem;
  height: 1rem;
  background-color: #49dede;

  border-radius: 100%;
  border-color: white;
  border-width: 2px;
  border-style: solid;

  transition: all 0.1s ease-in-out;
`

export default props => {
  const reverse = props.id % 2 === 0;

  return (
    <TimelineEvent key={props.id} reverse={reverse}>
      <Item>
        <Time reverse={reverse}>
          <DateText>{props.month + " " + props.year}</DateText>
        </Time>
      </Item>
      <Item>
        <Node />
      </Item>
      <Item>
        {<TimelineEventInfoBox title={props.title} description={props.description} />}
      </Item>
    </TimelineEvent>
  );
};
