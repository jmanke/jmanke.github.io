import React from "react";
import styled from "styled-components";
import Card from "../../ProjectCard/ProjectCard";
import projectInfo from "./projectInfo";
import FadeSection from "components/Shared/FadeSection/FadeSection";

const Projects = styled.div``

const Grid = styled.div``

const Columns = styled(FadeSection)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 0;
`

const Column = styled.div`
  padding: 0.75vw;
  width: 25vw;
  height: 30.5vw;

  max-width: 20.5rem;
  max-height: 25rem;

  @media screen and (max-width: 1024px) {
    width: 35vw;
    height: 42.7vw;
    max-width: initial;
    max-height: initial;
    margin: 1vw;
  }

  @media screen and (max-width: 767px) {
    margin: 3vw;
    width: 90vw;
    height: 85.4vw;

    min-width: 18rem;
    min-height: 21.96rem;
    max-width: 20.5rem;
    max-height: 25rem;
  }
`

export default () => {
  let i = 0;

  return (
    <Projects>
      <Grid>
        <Columns delay={200}>
          {projectInfo.map(info => (
            <Column key={i++}>
              <Card {...info} />
            </Column>
          ))}
        </Columns>
      </Grid>
    </Projects>
  );
};
