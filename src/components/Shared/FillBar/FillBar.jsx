import React from "react";
import "./FillBar.css";

function fillStyle(width) {
  return {
    display: "flex",
    backgroundColor: "rgb(35, 94, 131)",
    width: width ? width.toString() + "%" : "0%",
    height: "100%",
    alignSelf: "center"
    //borderRadius: "0 20px 20px 0"
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
    }

    const observer = new IntersectionObserver((entry) => setShowFill(true), options);
    observer.observe(domRef.current);
    return () => observer.unobserve(effectDomRef);
  }, [domRef]);

  return (
    <div ref={domRef} className={"fill-bar " + props.className ?? ""}>
      <div className="label-header">
        <div className="label">{props.label}</div>
      </div>
      <div className={"fill-background" + (showFill ? " is-visible" : "")}>
        <div style={fillStyle(props.fill)}>
          <div className="fill-percent">{props.fill + "%"}</div>
        </div>
      </div>
    </div>
  );
};
