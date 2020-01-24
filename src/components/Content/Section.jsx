import React from "react";
import { EventEmitter } from "../Shared/Events";
import Heading from "./Heading";
import FadeSection from "../Shared/FadeSection";

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

export default (props) => {
  // reference to the section
  const sectionRef = React.useRef();

  React.useEffect( () => {
    const effectSectionRef = sectionRef.current;

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList()
    }

    const observer = new IntersectionObserver( entries => {
      EventEmitter.dispatch("section_update", [props.title, entries[0]]);
    }, options);
    observer.observe(sectionRef.current);
    return () => observer.unobserve(effectSectionRef);
  }, [props.title]);

  console.log(props.title);
  console.log(props.children);

  return (
    <section className={"section " + props.bgColor} ref={sectionRef} id={props.title}>
      <div className="link-id" id={props.title} />
      <FadeSection>
        <Heading title={props.title} />
      </FadeSection>
      {props.children}
    </section>
  )
};