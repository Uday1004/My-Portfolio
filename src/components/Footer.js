import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <Container
      fluid
      className="footer"
      style={{
        backgroundColor: "#481c66",
        color: "#fff",
        padding: "20px 0",
        overflowX: "hidden",
      }}
    >
      {/* Newsletter Section */}
      {/* Contact Section */}
      <Row className="mb-4 mt-4 justify-content-center text-center">
        <Col xs="12" md="8" lg="6">
          <h2>
            Let’s <span className="purple">Connect</span>
          </h2>

          <Row className="justify-content-center">
            <Col
              xs="3"
              style={{ borderTop: "2px solid #fff", marginBottom: "10px" }}
            ></Col>
          </Row>

          <p style={{ fontSize: "19px" }}>
            Have a project in mind or want to discuss your requirements? Just
            drop your email and I’ll contact you shortly.
          </p>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Thanks! I will contact you at: ${email}`);
              setEmail("");
            }}
            className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2"
          >
            <Form.Control
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ maxWidth: "300px" }}
            />
            <Button type="submit" variant="primary">
              Contact Me
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Copyright Section */}
      <Row
        style={{
          padding: "10px 0",
          borderTop: "1px solid #b279d8",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Col md="4">
          <h3 style={{ fontSize: "18px" }}>Designed by Uday Solanki</h3>
        </Col>

        <Col md="4">
          <h3 style={{ fontSize: "18px" }}>© {year} Uday Solanki — All Rights Reserved</h3>
        </Col>

        <Col md="4">
          <h3 style={{ fontSize: "18px" }}>Built with passion and precision — powered by React.</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
