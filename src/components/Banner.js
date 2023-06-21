import React from 'react'
import { Row } from 'react-bootstrap'
import landingPageImage from "../assets/homepage-picture.png"


const Banner = () => {
  return (
   <section className="banner" id="home">
   <Row>
        <img src={landingPageImage} alt="NameAndProfession" />
        <div className="welcome-image">
             <span className="tagline">welcome to my portfolio</span>
        </div>

        <div class="scroll-down-dude">
            <span class="arrow-before"></span>
            <span class="arrow-after"></span>
        </div>

   </Row>
   </section>
  )
}


export default Banner


