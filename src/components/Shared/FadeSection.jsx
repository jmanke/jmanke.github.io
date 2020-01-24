import React from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const effectDomRef = domRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(isVisible || entry.isIntersecting);
      });
    }, {thresholds: props.thresholds});
    observer.observe(domRef.current);
    return () => observer.unobserve(effectDomRef);
  }, [isVisible, props.thresholds, domRef]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;