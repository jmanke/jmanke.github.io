import React from "react";
import styled from "styled-components";
import FocusPanel from "components/Shared/FocusPanel";
import NavItem from "components/Nav/NavItem";
import Button from "components/Shared/Button/Button";

const ProjectCard = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  transition: all 0.2s ease;
  box-shadow: 0 0 7px rgb(175, 207, 228);
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  height: 30%;
`

const ImageContainer = styled.div`
  background-color: red;
  width: 100%;
  height: 50%;
  margin: auto;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`

const Title = styled.h4`
  margin: 1rem 0 0.5rem;
`

const Description = styled.p`
  font-size: 0.9em;
  margin: 0;
  overflow-y: hidden;
  color: #9b9b9b;
`

const Footer = styled.div`
  margin-top: auto;
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Panel = styled.div`
  flex-direction: column;
  align-items: center;
`

const PanelContent = styled.div`
  width: 90%;
`

const PanelTitle = styled.h4`
  text-align: left;
  color: var(--accent-blue);

  /* @media screen and (max-width: 767px) {
    text-align: center;
  } */
`

const AchievementsList = styled.ul`
  align-self: flex-start;
  padding: 0 1.5rem;
  color: var(--text-color-dark);
`

const TechnologiesList = styled(AchievementsList)`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`

export default props => {
  const [panelVisible, setPanelVisible] = React.useState(false);
  let i = 0;

  return (
    <ProjectCard className={props.className ?? ""}>
      <ImageContainer>
        <CardImage src={props.image} alt={props.title} />
      </ImageContainer>
      <TextArea>
        <Title>{props.title}</Title>
        <Description>{props.cardText}</Description>
      </TextArea>
      <Footer>
        <Button onClick={() => setPanelVisible(true)}>Learn More</Button>
        {props.projectLink ? <NavItem
          icon={props.projectLink.faIcon}
          href={props.projectLink.href}
          size={`1.5em`}
          color={`#696969`}
        /> : null}
      </Footer>
      <FocusPanel heading={props.title} panelVisible={panelVisible} onClose={() => setPanelVisible(false)}>
        <Panel>
          <PanelContent>
            <PanelTitle>Achievements</PanelTitle>
            <AchievementsList>
              {props.achievements
                ? props.achievements.map(item => <li className="txt-sm" key={i++}>{item}</li>)
                : null}
            </AchievementsList>
          </PanelContent>

          <PanelContent>
            <PanelTitle>Technologies</PanelTitle>
            <TechnologiesList>
              {props.technologies
                ? props.technologies.map(item => <li className="txt-sm" key={i++}>{item}</li>)
                : null}
            </TechnologiesList>
          </PanelContent>
        </Panel>
      </FocusPanel>
    </ProjectCard>
  );
};
