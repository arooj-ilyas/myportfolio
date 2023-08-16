import React from "react";
import { Row, Container } from "react-bootstrap";
import landingPageImage from "../assets/homepage-picture.png";

const HomePage = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <div className="home-page-container">
            <img
              src={landingPageImage}
              alt="NameAndProfession"
              className="img-fluid"
            />
          </div>
          <div class="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
