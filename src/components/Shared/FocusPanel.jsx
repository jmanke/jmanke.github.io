import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton/CloseButton";

const FocusPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  visibility: ${props => props.visible ? `visible` : `hidden`};
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: fit-content;
  height: fit-content;
  max-width: 80vw;
  max-height: 80vh;
  margin: auto;
`

const Heading = styled.h3`
  max-width: 60%;
  padding: 1.5rem;
  margin: auto;
  text-align: center;
`

const Contents = styled.div`
  width: 90%;
  height: fit-content;
  padding-bottom: 2rem;
  margin: auto;
  overflow-y: auto;
`

// props
// panelVisible: type(boolean), sets panel visible
// onClose: type(callback), callback called when panel is closed 
export default props => {

  React.useEffect(() => {
    if (props.panelVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  return (
	<FocusPanel visible={props.panelVisible}>
		<Overlay onClick={() => props.onClose()} />
		<Container>
      <Heading>{props.heading}</Heading>
			<CloseButton onClick={() => props.onClose()}/>
      <Contents>
				{props.children}
			</Contents>
		</Container>
	</FocusPanel>
	)};
