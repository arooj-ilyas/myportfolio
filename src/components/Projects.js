import React from "react";
import projectsHeading from "../assets/projects-heading.png";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import spoilerAlertGraphic from "../assets/spoiler-alert-graphic.png"
import rubADubGraphic from "../assets/rub-a-dub-graphic.png"
import modernBankAppGraphic from "../assets/modern-bank-app-graphic.png"

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="projects">
      <Container>
        <div className="heading-container">
          <img src={projectsHeading} alt="ProjectsHeading" />
        </div>

        <Carousel responsive={responsive} infinite={true} className="projects-slider">
          <div className="item">
            <img src={rubADubGraphic} alt="project-graphic"/>
            <h3>Rub-a-Dub - Developer Hub</h3>
            <a href="https://github.com/arooj-ilyas/SOCProjectWeek_RubADub">
            <p>Link to GitHub Repo</p>
            </a>  
          
          </div>
          
          <div className="item">
            <img src={spoilerAlertGraphic} alt="project-graphic"/>
            <h3>SpoilerAlert!</h3>
            <a href="https://expo.dev/@fat_arrow_faction/SpoilerAlert?serviceType=classic&distribution=expo-go">
            <p>Link to ExpoGo Download - Android ONLY</p>
            </a>
          </div>
          
          <div className="item">
            <img src={modernBankAppGraphic} alt="project-graphic"/>
            <h3>Modern Bank App</h3>
            <a href="modern-bank-app-inky.vercel.app">
            <p>Link to deployed site</p>
            </a>
          </div>

        </Carousel>
      </Container>
    </section>
  );
};

export default Projects;
