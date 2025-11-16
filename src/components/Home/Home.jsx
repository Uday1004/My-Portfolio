import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mypic from "./myphoto.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hii.. There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Uday Solanki</strong>
              </h1>

              <p className="home-desc">
              Great products need <b className="purple">great execution</b> , and I’m ready to bring that to the table. <b className="purple">I’m Uday</b> — someone who supports the company from every angle, finds opportunities that drive growth, and steps in wherever the team needs impact.
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col className="col-pic" md={5} style={{ paddingBottom: 20 }}>
              <img 
                className="mypic img-fluid"
                src={mypic}
                style={{ maxHeight: "333px" }}
                alt=""
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
