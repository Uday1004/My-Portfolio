import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaChess } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hii Visitors, I am <span className="purple"> Uday Solanki </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            <br />I am a third year student pursuing a <span style={{textDecoration:'underline'}}> Bachelor of Technology in Computer Science and Engineering </span> at Sage University, Indore.
            <br />
            <br />
            Furthermore, I am a student actively engaged in independent projects, focusing on <span className="purple" style={{fontWeight:'bold'}}>self-driven</span>   initiatives and  <span className="purple" style={{fontWeight:'bolder'}}>skill development</span>  .
            <br />
            <br />
            Apart from Development and coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={{}}>
              <ImPointRight /> Playing Chess {/*<FaChess/>*/} & Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Computer Science and Engineering : Where imagination meets innovation, and algorithms weave the fabric of tomorrow's possibilities." {" "}
          </p>
          <footer className="blockquote-footer">Uday Solanki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
