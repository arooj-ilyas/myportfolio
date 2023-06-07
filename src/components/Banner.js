import React from 'react'
import {Row, Container, Col} from "react-bootstrap"
import nameImage from "../assets/name-h1-portfolio.png"

const Banner = () => {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">welcome to my portfolio</span>
                    <h1>{`hi 👋🏽`}</h1>
                    <a href="#!">
                        <img src={nameImage} alt="name-badge" />
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner