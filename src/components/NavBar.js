import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import instaIcon from "../assets/insta-icon-small.png";
import githubIcon from "../assets/github-icon-small.png";
import linkedInIcon from "../assets/linkedin-icon-small.png";
import logo from "../assets/logo.png"

const NavBar = () => {
  const [activePage, setActivePage] = useState("home"); //state to manage which page you are currently scrolled on
  const [scrolled, setScrolled] = useState(false); //background changes as user scrolls, using this state to detect if use scrolled

  //create a useEffect to determine if user has scrolled or not, trigger once user has scrolled
  //need to add an event listener on mount so it knows to fire once a scroll has been detected
  //must remember to remove event listener once the element gets removed from the DOM
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActivePage = (value) => {
    setActivePage(value)
  }

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled custom-navbar" : "custom-navbar"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={ activePage === "home" ? "current navbar-link" : "navbar-link"}
              onClick={() => updateActivePage()}
            >
              home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activePage === "skills" ? "current navbar-link" : "navbar-link"}
              onClick={() => updateActivePage()}
            >
              skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activePage === "project" ? "current navbar-link" : "navbar-link" }
              onClick={() => updateActivePage()}
            >
              projects
            </Nav.Link>
            {/* <Nav.Link href="#connect">connect</Nav.Link> */}
          </Nav>

          <span className="navbar-text">
            <div className="social-icons">
              <a href="https://github.com/arooj-ilyas">
                <img src={githubIcon} alt="github-icon" />
              </a>
              <a href="https://www.linkedin.com/in/arooj-ilyas/">
                <img src={linkedInIcon} alt="linkedin-icon" />
              </a>
              <a href="https://www.instagram.com/coder.oo/">
                <img src={instaIcon} alt="insta-icon" />
              </a>
            </div>

            <button onClick={() => console.log("connect")}>
              <span>contact me</span>
            </button>

          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

/*dont need a  dropdown for now but useful code to keep incase I want to add one at a later date, maybe for the projects tab

import NavDropdown from "react-bootstrap/NavDropdown";
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>*/
