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
                Break stuff to make it better. Code, design, deploy — repeat. If
                it’s not sleek, <br /> fast, and slightly over-engineered,
                <span className="purple"> UDAY — building, breaking, becoming 🪶</span>
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col className="col-pic" md={5} style={{ paddingBottom: 20 }}>
              <img
                className="mypic img-fluid"
                src={mypic}
                style={{ maxHeight: "333px" }}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
