import React from "react";
import "./FillBar.css";

function fillStyle(width) {
  return {
    width: width ? width.toString() + "%" : "0%"
  };
}

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
    <div ref={domRef} className={"fill-bar " + (props.className ?? "")}>
      <div className="fill-bar__heading">
        <p className="fill-bar__heading-label">{props.label}</p>
        <p className="fill-bar__heading-percent">{props.fill + "%"}</p>
      </div>
      <div className="fill-bar__bar-container">
        <div className={"fill-bar__bar " + (showFill ? "fill-bar__bar_isVisible" : "")} style={fillStyle(props.fill)} />
      </div>
    </div>
  );
};
