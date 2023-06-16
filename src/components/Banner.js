import React from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import {Row, Container, Col} from "react-bootstrap"
import nameImage from "../assets/name-h1-portfolio.png"
import pixelArooj from "../assets/pixel-arooj.png"

const Banner = () => {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center" xs={12} md={6} xl={7}>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">welcome to my portfolio</span>
                    <h1>{`hi 👋🏽`}
                    </h1>
                    <a href="#!">
                        <img src={nameImage} alt="name-badge" />
                    </a>
                    <button onClick={()=> console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img src={pixelArooj} alt="AroojPixelCharacter"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner