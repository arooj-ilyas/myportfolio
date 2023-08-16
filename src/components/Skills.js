import React from "react";
import skillsHeading from "../assets/skills-heading.png";
import skillsIconsDesktop from "../assets/skills-icons-desktop.png";
import purpleSkillsContainer from "../assets/purple-skills-container.png";
import skillsMobileView from "../assets/skills-container-mobile.png";
import { Container } from "react-bootstrap";

const Skills = () => {
  const isMobile = window.innerWidth <= 576;

  return (
    <section className="page-container" id="skills">
      <Container>
        <div className="heading-container">
          <img src={skillsHeading} alt="SkillsHeading" />
        </div>

        <img
          className="skills-icons"
          src={skillsIconsDesktop}
          alt="SkillsIcons"
        />
        <img
          className="skills-purple-container"
          src={isMobile ? skillsMobileView : purpleSkillsContainer}
          alt="PurpleContainerSkillsText"
        />
      </Container>
    </section>
  );
};

export default Skills;
