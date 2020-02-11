import React from "react";
import styled from "styled-components";

const ToolTip = styled.div`
  position: fixed;
  text-align: center;
  top: ${props => props.position.top + "px"};
  left: ${props => props.position.left + "px"};
  color: #FFFFFF;
  pointer-events: none;
  font-size: 0.8em;
  border-radius: 0.5em;
  background: var(--secondary-color);
  padding: 0.5em;
  transition: opacity 0.15s ease;
  opacity: ${props => props.visible ? `1` : `0`};
`

const ToolTipArrow = styled.div`
  content: "";
  position: absolute;
  top: 50%;
  right: 98%;
  margin-top: -0.375em;
  border-width: 0.375em;
  border-style: solid;
  border-color: transparent var(--secondary-color) transparent transparent;
`

export default props => {
  const domRef = React.useRef(null);
  const [position, setPosition] = React.useState({
    top: 0,
    left: 0
  });

  React.useEffect(() => {
    const parentRect = domRef.current.parentElement.getBoundingClientRect();
    const mRect = domRef.current.getBoundingClientRect();
    const top = Math.trunc(parentRect.top + ((parentRect.bottom - parentRect.top) / 2) - mRect.height / 2);
    const left = Math.trunc(parentRect.right + props.paddingLeft ?? 0);

    if (position.top !== top || position.left !== left) {
      setPosition({ top, left });
    }
  }, [position, props.paddingLeft, props.visible]);

  return (
    <ToolTip visible={(props.visible && domRef.current)} position={position} ref={domRef}>
      <ToolTipArrow />
      {props.label}
    </ToolTip>
  )
}