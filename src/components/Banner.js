import React from 'react'
import landingPageImage from "../assets/homepage-picture.png"


const Banner = () => {
  return (
   <section className="banner" id="home">
        <img src={landingPageImage} alt="NameAndProfession" />
   </section>
  )
}


/* <Row className="align-items-start" xs={12} md={6} xl={7}>
          <Col xs={12} md={6} xl={7}>
            <h1>{`HI! I'M A... `}</h1>
            <h1><span className="wrap">{text}</span></h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={profilePicArooj} className="profilepicture" alt="AroojProfilePic" />
          </Col>
</Row> */

export default Banner


