import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaAngleDoubleRight, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              I'd Like To Share a Bit About{" "}
              <span className="purple"> "MYSELF"</span>
            </h1>
            <p className="home-about-body">
              The world of development has always inspired me to go beyond
              conventional limits. Specialize in building robust, scalable, and
              aesthetically modern web applications using a diverse technology
              stack. The approach combines creativity with engineering precision
              — whether it’s a prototype, a SaaS platform, or a full-fledged
              product deployment.
              <br />
              <br />
              I'm well-versed in the timeless languages of
              <i>
                <b className="purple"> Javascript, Python and Java. </b>
              </i>
              <br />
              <br />
              <div>
                <h3 className="purple">
                  Technical Expertise <MdOutlineArrowForwardIos size={23} />{" "}
                </h3>
                <ul className="item-list">
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Frontend : </span>{" "}
                    <span>
                      React.js, Next.js, React Native (Expo), Flutterflow
                      Prototype Design
                    </span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Backend : </span>{" "}
                    <span>Node.js, Python (Flask), Java (Spring Boot)</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Databases : </span>{" "}
                    <span>MongoDB, MySQL Workbench</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Cloud & DevOps : </span>{" "}
                    <span>AWS (Tier-2), Linux (Tier-2)</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">CMS & SEO : </span>{" "}
                    <span>WordPress, CMS Toolkits, Technical/On-page SEO</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight /> <span className="purple">Tools : </span>{" "}
                    <span>GitHub, Postman, Flutterflow, Canva</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="purple">
                  Core Expertise <MdOutlineArrowForwardIos size={23} />{" "}
                </h3>
                <ul className="item-list">
                  <li className="about-activity" style={{}}>
                    <FaAngleDoubleRight />{" "}
                    <span>React-based Micro Frontend Architecture</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Backend : </span>{" "}
                    <span>Node.js, Python (Flask), Java (Spring Boot)</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Databases : </span>{" "}
                    <span>MongoDB, MySQL Workbench</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">Cloud & DevOps : </span>{" "}
                    <span>AWS (Tier-2), Linux (Tier-2)</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight />{" "}
                    <span className="purple">CMS & SEO : </span>{" "}
                    <span>WordPress, CMS Toolkits, Technical/On-page SEO</span>
                  </li>
                  <li className="about-activity" style={{}}>
                    <FiArrowUpRight /> <span className="purple">Tools : </span>{" "}
                    <span>GitHub, Postman, Flutterflow, Canva</span>
                  </li>
                </ul>
              </div>
              My passion lies in crafting innovative &nbsp;
              <i>
                <b className="purple">Web-App's Development </b> and as well as
                delving into the fascinating realm of{" "}
                <b className="purple">Real-time Projects</b> and its related
                domains. <b className="purple">Ecommerce.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and MUI for design</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CATCH UP WITH ME ON:</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Uday1004 "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/UdaySolanki0312 "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/uday-solanki-a62967277/ "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=" https://www.instagram.com/udaysolankii03/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:udaysolanki530@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
