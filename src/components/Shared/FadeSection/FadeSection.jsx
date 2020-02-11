import React from "react";
import styled from "styled-components";
import styleVars from "styleVars";

const Container = styled.div``

const FadeSection = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? `none` : `translateY(10vh)`};
  visibility: ${props => props.visible ? `visible` : `hidden`};
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;

  @media screen and (max-width: ${styleVars.mobileWidth}) {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`

export default props => {
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
    <Container className={props.className ?? ""} ref={domRef}>
      {React.Children.map(props.children, child => (
        <FadeSection visible={isVisible && i++ < numVisible}>
          {child}
        </FadeSection>
      ))}
    </Container>
  );
}
