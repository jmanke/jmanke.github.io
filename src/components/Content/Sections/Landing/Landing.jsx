import React from "react";
import styled from "styled-components";
import logo from "images/logo_circle.png";
import Canvas from "./LandingCanvas";
import IntersectionObserver from "components/Shared/IntersectionObserver";
import TypeWriter from "components/Shared/TypeWriter";
import Events from "components/Shared/Events";

const LandingPage = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: var(--primary-color-dark);

  @media screen and (max-width: 767px) {
    top: $margin-top;
  }
`

const Container = styled.div`
  position: relative;
  width: 35vw;
  height: 35vw;
  font-size: 1vw;
  margin: auto;
  border-radius: 100%;
  background: linear-gradient(to left, #3F9CD6, #49DEDE);
  z-index: 1;

  @media screen and (min-width: 1104px) {
    width: 25rem;
    height: 25rem;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 767px) {
    width: 60vw;
    height: 60vw;
    font-size: 2vw;
  }

  @media screen and (orientation:landscape) { 
    width: 50vh;
    height: 50vh;
    font-size: 1.55vh;
  }

  &::before {
    position: absolute;
    content: "";
    top: 2.5%;
    left: 2.5%;
    width: 90%;
    height: 90%;
    border-radius: 100%;

    z-index: 0;

    background-color: var(--primary-color-dark);
  }
`

const MainTitle = styled.h1`
  position: relative;
  margin: 0;
  margin-top: 2.5em;
  font-size: 4em;
  color: #f5f5f5;
`

const SubTitle = styled(TypeWriter)`
  position: relative;
  font-size: 2em;
  color: #6a9955;
`

const LogoAnchor = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
`

const Logo = styled.img`
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? `none` : `scale(0)`};
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  position: relative;
  bottom: 5rem;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.2s ease-out;
  z-index: 1;

  @media screen and (max-width: 767px) {
    width: 5rem;
    height: 5rem;
    bottom: 2.5rem;
  }
`

export default () => {
  const [logoVisible, setLogoVisible] = React.useState(false);
  const [subtitleVisible, setSubtitleVisible] = React.useState(false);
  const showLogoThresh = 0.85;

  function handleLogoDisplay(intersectionInfo) {
    setLogoVisible(
      intersectionInfo[0].intersectionRatio < showLogoThresh ? true : false
    );
  }

  function onWindowLoad() {
    setSubtitleVisible(true);
  }

  React.useEffect(() => {
    if (React.windowIsLoaded && !subtitleVisible) {
      onWindowLoad();
    }

    if (!React.windowIsLoaded && !subtitleVisible) {
      Events.eventEmitter.subscribe("onWindowLoad", onWindowLoad);

      return () =>
        Events.eventEmitter.unsubscribe("onWindowLoad", onWindowLoad);
    }
  });

  return (
    <LandingPage>
      <Content>
        <IntersectionObserver
          onChange={handleLogoDisplay}
          threshold={[showLogoThresh]}
        />
        <Canvas />
        <Container className="unselectable">
          <MainTitle>Jeff Manke</MainTitle>
          {subtitleVisible ? (
            <SubTitle text={"// Software Developer "} />
          ) : null}
        </Container>
        <LogoAnchor>
          <Logo
            src={logo}
            alt="Jeff Manke Logo"
            visible={logoVisible}
          />
        </LogoAnchor>
      </Content>
    </LandingPage>
  );
};
