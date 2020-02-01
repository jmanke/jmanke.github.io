import React from "react";
import "./InfoCard.css";

export default props => {
  return (
    <div className={"info-card " + (props.secondary ? "info-card_secondary " : "") + (props.className ?? "")}>
      <div className="info-card__icon">
        {props.icon}
      </div>
      <h3 className="info-card__title txt-lg">
        {props.title}
      </h3>
      <div className="info-card__text-container">
        <p className="info-card__text">
          {props.text}
        </p>
      </div>
    </div>
  )
}