import React from 'react'
import { Row, Container } from 'react-bootstrap'
import landingPageImage from "../assets/homepage-picture.png"


const Banner = () => {
  return (
   <section className="banner" id="home">
   <Container>
   <Row>
        <div className="home-page-container">
        <img src={landingPageImage} alt="NameAndProfession" />
             <button type="submit" className="purple-tagline-button">welcome to my portfolio</button>
        </div>
   </Row>
   </Container>
   </section>
  )
}


export default Banner


