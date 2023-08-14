import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vchat from "../../Assets/Projects/vchat.png";
 
import tutils from "../../Assets/Projects/tutils.png";
import mausamui from "../../Assets/Projects/mausamui.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mausamui}
              isBlog={false}
              title="Mausam.UI"
              description="Mausam.UI is a cutting-edge weather website that seamlessly blends advanced meteorological data with user-friendly design, providing an exceptional weather forecasting experience"
              ghLink="https://github.com/Uday1004/weather_App"
              demoLink="https://mausamui.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Treasurease | Shopping-Website"
              description="Treasurease, a premier online shopping website, redefines the virtual retail landscape by seamlessly melding a vast product catalog with a user-centric interface, promising an unparalleled shopping experience."
              ghLink="https://github.com/Uday1004/Ecommerce-Website"
              demoLink="https://treasurease.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutils}
              isBlog={false}
              title="Text-Utils"
              description="Tutils, an innovative text manipulation website, revolutionizes the way we interact with and transform textual content. Boasting a sleek and user-friendly interface, Tutils empowers users to effortlessly manipulate and enhance text for a myriad of creative and practical purposes."
              ghLink="https://github.com/Uday1004/Text-Utils"
              demoLink="https://tutils.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vchat}
              isBlog={false}
              title="V-Meet"
              description="Introducing V-meet, an exceptional video chat clone that reimagines virtual communication, connecting individuals in a seamless and immersive way. With an intuitive interface and cutting-edge technology, V-meet offers an unparalleled video chat experience, bringing people together across distances."
              ghLink="https://github.com/Uday1004/Video-Chat-Clon"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This project has been meticulously developed to provide a comprehensive insight into my portfolio, showcasing my professional journey, educational background, and other relevant accomplishments. It serves as a dedicated platform for you to gain an in-depth understanding of both my work and personal profile."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
