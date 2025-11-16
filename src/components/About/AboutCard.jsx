import React from "react";
import Card from "react-bootstrap/Card";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",fontSize:"18px" }}>
            Hii Visitors, I am from <b className="purple"> Indore, India.</b>
            <br />
            <br />
            <h3 className="purple">
              Work & Experience <MdOutlineArrowForwardIos size={23} />{" "}
            </h3>
            From December 2023, I worked as a{" "}
            <b className="purple">Technical Analyst - Intern</b> , and in
            September 2025, I moved into a full-time role as a{" "}
            <b className="purple">Technology Analyst</b> At{" "}
            <a href="https://www.cloudstrytech.com/" className="purple">
              CloudStry Technologies
            </a>{" "}
            . My responsibilities include building project prototypes,
            developing React micro-frontends, and creating WordPress websites.
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",fontSize:"18px" }}>
            <br />
            <br />
            <h3 className="purple">
              Education <MdOutlineArrowForwardIos size={23} />
            </h3>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <b className="purple">SAGE University, Indore</b> (2021 – 2025){" "}
                <br />
                Bachelor of Technology in Computer Science & Engineering
              </li>

              <li>
                <b className="purple">Saraswati Shishu Mandir, Alote, MP </b>{" "}
                (2019 – 2021) <br />
                MPBSE – State Board (Class XII - PCM)
              </li>
            </ul>
          </p>
        </blockquote>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            <br />
            <h3 className="purple">
              Education <MdOutlineArrowForwardIos size={23} />
            </h3>

            <p style={{fontSize:"18px"}}>
              <b className="purple">
                AWS Cloud Foundation – Virtual Internship
              </b>{" "}
              (May 2023 – June 2023) <br />
              Completed under <b>AICTE–EDUSKILLS</b> in an off-site format.
              Gained a strong foundational understanding of AWS cloud services
              including EC2, S3, Route53, CodeDeploy, CodePipeline, IAM, VPC,
              and more. The internship provided structured learning on AWS
              architecture, cloud concepts, security practices, and policy
              management. It also included hands-on exposure to essential AWS
              tools and services, enabling a solid grasp of best practices in
              cloud environments.
            </p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
