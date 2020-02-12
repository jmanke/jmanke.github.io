import React from "react";
import styled from "styled-components";

const FillBar = styled.div`
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  margin: 0.5rem 0;
`

const HeadingContainer = styled.div`
    display: flex;
`

const Label = styled.p`
  color: #1C6FA2;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: auto;
`

const Percent = styled.p`
  color: #1C6FA2;
  opacity: 70%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
`

const BarContainer = styled.div`
  width: 100%;
  height: 0.4rem;

  border-style: solid;
  border-color: rgba(161, 200, 224, 0.5);
  border-width: 1px;

  overflow: hidden;
`

const Bar = styled.div`
  display: flex;
  background: linear-gradient(to left, #3F9CD6, #49DEDE);
  height: 100%;
  width: ${props => props.fill + "%"};
  align-self: center;
  box-shadow: 0 0 7px rgb(175, 207, 228);
  transform: ${props => props.visible ? `none` : `translateX(-100%)`};
  transition: transform 2s ease-out;
`

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
    <FillBar ref={domRef}>
      <HeadingContainer>
        <Label>{props.label}</Label>
        <Percent>{props.fill + "%"}</Percent>
      </HeadingContainer>
      <BarContainer>
        <Bar visible={showFill} fill={props.fill} />
      </BarContainer>
    </FillBar>
  );
};
