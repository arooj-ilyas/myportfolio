import React from "react";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Container, Col } from "react-bootstrap";
import nameImage from "../assets/name-h1-portfolio.png";
import pixelArooj from "../assets/pixel-arooj.png";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center" xs={12} md={6} xl={7}>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">welcome to my portfolio</span>
            <h1>{`HI I'M AROOJ 👋🏽 I'M A... `}
                <span className="wrap">WEB DEVELOPER</span>
            </h1>
            <button onClick={() => console.log("connect")}>
              Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={pixelArooj} alt="AroojPixelCharacter" />
            <a href="#!">
              <img src={nameImage} alt="name-badge" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
