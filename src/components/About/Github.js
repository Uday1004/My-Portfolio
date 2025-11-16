import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Github() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          <b className="purple">Github Overview</b>
        </h1>
        <GitHubCalendar
          username="Uday1004"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      <Row>
        <Col md={12} className="home-about-social mt-5 mb-4">
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
    </>
  );
}

export default Github;
