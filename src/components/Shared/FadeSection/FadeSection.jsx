import React from "react";
import "./FadeSection.css";

function FadeSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const [numVisible, setNumVisible] = React.useState(1);
  const triggered = React.useRef(false);
  const domRef = React.useRef();
  const delay = props.delay ?? 0;

  function fadeInItem() {
    setNumVisible(numVisible + 1);
  }

  React.useEffect(() => {
    if (triggered.current) return;
    triggered.current = true;

    const effectDomRef = domRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(isVisible || entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(effectDomRef);
  }, [isVisible, domRef]);

  if (!props.children) {
    return <div className="fade-in-section" />;
  }

  if (triggered.current && numVisible < props.children.length) {
    setTimeout(() => fadeInItem(), delay);
  }

  let i = 0;

  return (
    <div className={"fade-in-section-container " + (props.className ?? "")} ref={domRef}>
      {React.Children.map(props.children, child => (
        <div className={`fade-in-section ${isVisible && i++ < numVisible ? "is-visible" : ""}`}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default FadeSection;
