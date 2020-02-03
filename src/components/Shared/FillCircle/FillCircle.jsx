import React from "react";
import "./FillCircle.css";

export default props => {
  const domRef = React.useRef();
  const triggered = React.useRef(false);
  const [showFill, setShowFill] = React.useState(false);

  React.useEffect(() => {
    if (triggered.current) return;
    triggered.current = true;

    const effectDomRef = domRef.current;

    let options = {
      threshold: 0
    };

    const observer = new IntersectionObserver(entry => {
      for (let i = 0; i < entry.length; i++) {
        if (entry[i].isIntersecting) {
          setShowFill(true);
          break;
        }
      }
    }, options);
    observer.observe(domRef.current);
    return () => observer.unobserve(effectDomRef);
  }, [domRef]);

  return (
    <div className="fill-circle" ref={domRef}>
      <h4 className="fill-circle__label">{props.label}</h4>
      <div className={"progress-circle " + (props.fill > 50 ? "over50 " : "") + "p" + props.fill.toString()}>
        <span>{props.fill + "%"}</span>
        <div className="left-half-clipper">
          <div className="first50-bar"></div>
          <div className={"value-bar " + (showFill ? "value-bar_visible" : "")}></div>
        </div>
      </div>
    </div>
  );
};
