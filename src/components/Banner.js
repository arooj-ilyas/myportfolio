import React from 'react'
import { Row } from 'react-bootstrap'
import landingPageImage from "../assets/homepage-picture.png"


const Banner = () => {
  return (
   <section className="banner" id="home">
   <Row>
        <img src={landingPageImage} alt="NameAndProfession" />
        <div className="tagline-container">
             <button type="submit" className="tagline">welcome to my portfolio</button>
        </div>
   </Row>
   </section>
  )
}


export default Banner


