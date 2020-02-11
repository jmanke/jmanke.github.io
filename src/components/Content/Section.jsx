import React from "react";
import styled from "styled-components";
import Events from "components/Shared/Events";
import FadeSection from "components/Shared/FadeSection/FadeSection";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
  background-color: ${props => props.bgColor ? props.bgColor : `#FFFFFF`}
`

const SectionContainer = styled.div`
  width: 90%;
  max-width: 1104px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding: var(--margin-vertical-mobile) 0;
  }
`

const Heading = styled.h1`
  position: relative;
  color: ${props => props.color ? props.color : `#3b3b3b`};
  text-align: center;
  padding: 0;
  margin: 5rem 0 8rem 0;

  @media screen and (max-width: 767px) {
    margin: 5rem 0 3rem 0;
  }
`

export default (props) => {
  const sectionRef = React.useRef();

  React.useEffect(() => {
    const effectSectionRef = sectionRef.current;

    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;

      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }

      thresholds.push(0);
      return thresholds;
    }

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList()
    }

    const observer = new IntersectionObserver(entries => {
      Events.eventEmitter.dispatch("section_update", [props.title, entries[0]]);
    }, options);
    observer.observe(sectionRef.current);
    return () => observer.unobserve(effectSectionRef);
  }, [props.title]);

  return (
    <Section bgColor={props.bgColor} className={props.className ?? ""} ref={sectionRef}>
      <div id={props.title} />
      <FadeSection>
        <Heading color={props.headingColor}>
          {props.title}
        </Heading>
      </FadeSection>
      <SectionContainer>
        {props.children}
      </SectionContainer>
    </Section>
  )
};