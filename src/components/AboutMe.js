import React from "react";
import { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import profilePicArooj from "../assets/profile-pic.png"

const AboutMe = () => {
    //create a variable to hold the phrases I want it to rotate through, and a state to hold which word it is currently displaying, and a 'delete' state which will backspace to remove the current word and display the next
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false) //set to false as we start by typing the word
    const toRotate = ["FULL STACK WEB DEVELOPER", "FRONT END DEVELOPER", "JUNIOR SOFTWARE ENGINEER", "MANUFACTURING & MECHANICAL ENGINEER", "SOLITARE SLAYER"]
    const [text, setText] = useState(''); //indicate the portion of the text being displayed
    const [timeToTypeText, setTimeToTypeText] = useState(200) //indicates time passing between each letter being typed
    const period = 500 //indicates time passing between each word is 'typed'

  //this will run the function that is responsible for taking care of the 'typing' 'deleting' animation
  useEffect(()=> {
    let ticker = setInterval(()=> {
        tick()
    }, timeToTypeText)

    return() => { clearInterval(ticker)} //want to clear the state after it has been typed
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText= isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

    setText(updatedText);

    if (isDeleting) {
      setTimeToTypeText(prevTimeToType => prevTimeToType /1.5)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTimeToTypeText(period)
    } else if (isDeleting ** updatedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTimeToTypeText(500)
      }
    }

  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row className="align-items-center" xs={12} md={6} xl={7}>

          <Col xs={12} md={6} xl={7}>
            <span className="tagline">welcome to my portfolio</span>
            <h1>{`HI! I'M A... `}</h1>
                <h1><span className="wrap">{text}</span></h1>
          </Col>
          
          <Col xs={12} md={6} xl={5}>
            <img src={profilePicArooj} alt="AroojProfilePic" />
          </Col>
        
        </Row>
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