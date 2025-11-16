import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { ProjectData } from "./projectdata";

function Projects() {
  // const [project, setproject] = useState([]);
  // const Featured = ["Embedded-AI-Chatbot-Widget","AI-React-Code-Generator-","FinanceTracker","Activity-Audit-by-Github-Actions","Apache-kafka-Nodejs-Microservices-Application","E-Bike-Rental-Project","Trading-visualizer-using-websocket","Dockerize-App-Implementation","Multi-Crypto-Currency-Wallet"];

  // async function GetProject() {
  //   const res = await fetch("https://api.github.com/users/udaysolanki03/repos");
  //   const data = await res.json();
  //   const selected = data.filter((item)=>Featured.includes(item.name));
  //   setproject(selected);

  // }
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
          {ProjectData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
