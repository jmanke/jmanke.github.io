import React, { useCallback } from "react";
import { EventEmitter } from "../Shared/Events";
import Heading from "./Heading";

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
  const ref = useCallback(sectionNode => {
    if (sectionNode !== null) {
      createObserver(sectionNode);
    }
  }, []);

  // observer that checks intersection of section wih viewport
  function createObserver(node) {
    let observer;

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList()
    }

    observer = new IntersectionObserver((info) => {
      EventEmitter.dispatch("section_update", [props.title, info[0].intersectionRect.height]);
    }, options);
    observer.observe(node);
  }

  return (
    <section className={"section " + props.bgColor} ref={ref}>
      <div className="link-id" id={props.title} />
      <Heading title={props.title} />
      {props.children}
    </section>
  )
};