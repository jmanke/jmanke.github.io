import React from "react";

export default props => {
  return (
    <div className="resume-item">
      <div className="resume-item__header">
        <div className="resume-item__header__primary">
          <p className="resume-company txt-xlg txt-reset-lh"><strong>{props.company}</strong></p>
          <p className="txt-lg">{props.position}</p>
        </div>
        <div className="resume-item__header__secondary">
          <p className="txt-sm txt-align-right">{props.period}</p>
          <p className="txt-sm txt-align-right">{props.location}</p>
        </div>
      </div>
      <div className="resume-item__content">
        <p className="txt-md">{props.description}</p>
      </div>
    </div>
  );
};
