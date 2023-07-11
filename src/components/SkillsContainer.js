import React from 'react'
import skillsHeading from "../assets/skills-heading.png"
import skillsIconsDesktop from "../assets/skills-icons-desktop.png"
import purpleSkillsContainer from "../assets/purple-skills-container.png"


const SkillsContainer = () => {

  return (
    <section id="skills">
      <div className="heading-container">
        <img src={skillsHeading} alt="SkillsHeading" />
      </div>
     
      <img className="skills-icons" src={skillsIconsDesktop} alt="SkillsIcons"/>
      <img className="skills-purple-container" src={purpleSkillsContainer} alt="PurpleContainerSkillsText"/>

    </section>
  )
}

export default SkillsContainer