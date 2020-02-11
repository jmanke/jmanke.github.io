import React from "react";
import styled from "styled-components";
import styleVars from "styleVars";
import FocusPanel from "components/Shared/FocusPanel";
import NavItem from "components/Nav/NavItem";
import Button from "components/Shared/Button/Button";

const ProjectCard = styled.div`
  position: relative;
  box-sizing: inherit;
  overflow: hidden;
`

const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  transition: all 0.2s ease;
  box-shadow: 0 0 7px rgb(175, 207, 228);
  overflow-x: clip;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0 10px rgb(175, 207, 228);

    @media screen and (max-width: ${styleVars.mobileWidth}) {
      transform: none;
    }
  }
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
`

const CardImage = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 50%;
`

const Title = styled.h4`
  color: $accent-blue;
  margin: 1rem 0 0.5rem;
`

const Description = styled.p`
  margin: 0;
  overflow-y: hidden;
  color: #9b9b9b;
`

const Footer = styled.div`
  margin-top: auto;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default props => {
  const [panelVisible, setPanelVisible] = React.useState(false);
  let i = 0;

  return (
    <ProjectCard className={props.className ?? ""}>
      <Page>
        <CardImage src={props.image} alt={props.title} />
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
            color={`#3b3b3b`}
          /> : null}
        </Footer>
      </Page>
      <FocusPanel heading={props.title} panelVisible={panelVisible} onClose={() => setPanelVisible(false)}>
        <div className="project-card__panel">
          <div className="project-card__panel-content">
            <h4 className="project-card__title">Achievements</h4>
            <ul className="project-card__list">
              {props.achievements
                ? props.achievements.map(item => <li className="txt-sm" key={i++}>{item}</li>)
                : null}
            </ul>
          </div>

          <div className="project-card__panel-content">
            <h4 className="project-card__title">Technologies</h4>
            <ul className="project-card__list project-card__list_technologies">
              {props.technologies
                ? props.technologies.map(item => <li className="txt-sm" key={i++}>{item}</li>)
                : null}
            </ul>
          </div>
        </div>
      </FocusPanel>
    </ProjectCard>
  );
};
