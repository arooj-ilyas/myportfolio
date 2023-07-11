import React from 'react'
import skillsHeading from "../assets/skills-heading.png"
import skillsIcons from "../assets/skills-icons.png"

const SkillsContainer = () => {

 const skills = [
    { text: 'JavaScript', color: '#f44336' },
    { text: 'HTML/CSS', color: '#ff9800' },
    { text: 'React.js', color: '#9c27b0' },
    { text: 'React Native', color: '#3f51b5' },
    { text: 'Git/GitHub', color: '#4caf50' },
    { text: 'Express.js', color: '#2196f3' },
    { text: 'Node.js', color: '#673ab7' },
    { text: 'PostgreSQL', color: '#009688' },
    { text: 'REST API', color: '#ff5722' },
    { text: 'Figma', color: '#795548' },
    { text: 'Jest', color: '#607d8b' },
    { text: 'Cypress', color: '#e91e63' },
    { text: 'TailwindCSS', color: '#00bcd4' },
    { text: 'Bootstrap', color: '#8bc34a' },
];

  return (
    <section className="skills" id="skills">
      <div className="heading-container">
          <img className="heading" src={skillsHeading} alt="SkillsHeading" />
      </div>
      <img className="skills-icons" src={skillsIcons} alt="SkillsIcons"/>
    </section>
  )
}

export default SkillsContainer