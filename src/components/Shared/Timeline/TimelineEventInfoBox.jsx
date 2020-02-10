import React from "react";
import styled from "styled-components";
import styleVars from "styleVars";

const TimelineEventInfoBox = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 3px rgb(175, 207, 228);
  text-align: left;
`

const Title = styled.h4`
  color: #696969;
  padding: 0 0.75rem;
  margin: 0.75rem 0 0.25rem;
  font-size: 15px; 
`

const Description = styled.p`
  margin: 0 0 0.5rem 0;
  padding: 0 0.75rem;
  font-size: 13px;
  color: #8a8a8a;
`

export default props => {
  return (
    <TimelineEventInfoBox>
    <Title>
      {props.title}
    </Title>
    <Description>
      {props.description}
    </Description>
  </TimelineEventInfoBox>
  );
};
