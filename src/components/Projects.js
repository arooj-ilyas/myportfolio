import React from 'react'
import projectsHeading from "../assets/projects-heading.png"
import { Container } from 'react-bootstrap'

const Projects = () => {
  return (
    <section id="projects">
    <Container>

      <div className="heading-container">
        <img src={projectsHeading} alt="ProjectsHeading" />
      </div>
    
    </Container>
    </section>
  )
}

export default Projects