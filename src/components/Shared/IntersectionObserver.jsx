import React from "react";

const styles = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%"
}

export default (props) => {
  const domRef = React.useRef();

  React.useEffect(() => {
    const effectDomRef = domRef.current;

    let options = {
      threshold: props.threshold
    }

    const observer = new IntersectionObserver(props.onChange, options);
    observer.observe(domRef.current);
    return () => observer.unobserve(effectDomRef);
  }, [props, domRef]);

  return (
    <div style={styles} ref={domRef}>
    </div>
  );
}