import React from "react";
import { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import profilePicArooj from "../assets/profile-pic.png";
import aboutMeHeading from "../assets/aboutme-heading.png";

const AboutMe = () => {
  //create a variable to hold the phrases I want it to rotate through, and a state to hold which word it is currently displaying, and a 'delete' state which will backspace to remove the current word and display the next
  const [loopNum, setLoopNum] = useState(0); //which word is currently displayed in the toRotate array
  const [isDeleting, setIsDeleting] = useState(false); //set to false as we start by typing the word
  const toRotate = [
    "FULL STACK WEB DEVELOPER",
    "FRONT END DEVELOPER",
    "JUNIOR SOFTWARE ENGINEER",
    "MECHANICAL & MANUFACTURING ENGINEER",
    "SOLITARE SLAYER",
  ];
  const [text, setText] = useState(" "); //indicate the portion of the text being displayed
  const [timeToTypeText, setTimeToTypeText] = useState(200); //indicates time passing between each letter being typed
  const timeBetweenWord = 1000; //indicates time passing between each word is 'typed'

  //this will run the function that is responsible for taking care of the 'typing' 'deleting' animation
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, timeToTypeText);

    return () => {
      clearInterval(ticker);
    }; //want to clear the state after it has been typed
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTimeToTypeText((prevTimeToType) => prevTimeToType / 2);
    }

    // the point at which the full word has been typed out
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTimeToTypeText(timeBetweenWord); //set time back to its normal pace, for deleting it is quicker and for typing we want it slower
    }

    // the point at which the word is fully deleted and the next item in the toRotate array can be typed
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTimeToTypeText(200);
    }
  };

  return (
    <section className="page-container" id="aboutme">
      <Container>
        <div className="heading-container">
          <img src={aboutMeHeading} alt="AboutMeHeading" />
        </div>
        <div xs={12} md={6} xl={12}>
          <img
            src={profilePicArooj}
            alt="AroojProfilePic"
            className="profilepicture"
          />
        </div>
        <Col xs={12} md={6} xl={12}>
          <h1 className="typing-animation">{`HI! I AM A... ${text}`}</h1>
        </Col>

        <p className="description">Image of me!</p>
      </Container>
    </section>
  );
};

export default AboutMe;

// import { ArrowRightCircle } from "react-bootstrap-icons";
// <button onClick={() => console.log("connect")}>
//               Let's connect
//               <ArrowRightCircle size={25} />
//             </button>

/* <div className="button-overlay">
          <button onClick={() => console.log("connect")}>
            Let's connect
            <ArrowRightCircle size={25} />
          </button>
        </div> */
