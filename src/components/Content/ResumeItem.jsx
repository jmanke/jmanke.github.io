import React from "react";

export default props => {
  return (
    <div className={"resume-item " + (props.className ?? "")}>
      <div className="resume-item__header">
        <div className="resume-item__header-primary">
          <p className="resume-item__company txt-xlg txt-reset-lh"><strong>{props.company}</strong></p>
          <p className="resume-item__position txt-lg">{props.position}</p>
        </div>
        <div className="resume-item__header-secondary">
          <p className="txt-sm">{props.period}</p>
          <p className="txt-sm">{props.location}</p>
        </div>
      </div>
      <div className="resume-item__content">
        <p className="txt-md txt-one-half">{props.description}</p>
      </div>
    </div>
  );
};
