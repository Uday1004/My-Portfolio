import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vchat from "../../Assets/Projects/vchat.png";

import hh from "../../Assets/Projects/hh.png";
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
              imgPath={hh}
              isBlog={false}
              title="HungryHubb | Online-Food ordering "
              description= " HungryHubb is a cutting-edge online food website application that has revolutionized the way people discover, order, and enjoy their favorite meals. This innovative platform is designed to cater to the cravings of food enthusiasts by providing a seamless and convenient culinary experience."
              ghLink="https://github.com/Uday1004/HungryHub"

              demoLink="https://hungryhubb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutils}
              isBlog={false}
              title="Text-Utils"
              description="TextUtils is an exceptional online text manipulation website that serves as a versatile toolkit for users seeking to perform a wide range of text-related tasks. This platform offers an array of powerful tools designed to streamline text processing, making it an indispensable resource for writers, developers, students, and professionals alike."
              ghLink="https://github.com/Uday1004/Text-Utils"
              demoLink="https://tutils.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This project has been meticulously developed to provide a comprehensive insight into my portfolio, showcasing my professional journey, educational background, and other relevant accomplishments. It serves as a dedicated platform for you to gain an in-depth understanding of both my work and personal profile."
              ghLink="https://github.com/Uday1004/My-Portfolio"
              demoLink="https://udaysolanki.netlify.app/" /* <--------Please include a demo link here*/
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
