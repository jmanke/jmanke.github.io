import React from "react";

export default (props) => {
  return (
    <div className="resume-item">
      <div className="resume-item__header">
        <h3 className="txt-lg">{props.company}</h3>
        <h5 className="">{props.period}</h5>
      </div>
      <div className="resume-item__content">
        <h4 className="">{props.position}</h4>
        <p className="">{props.description}</p>
      </div>
    </div>
  );
}