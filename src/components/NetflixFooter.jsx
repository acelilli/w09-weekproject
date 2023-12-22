import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const NetflixFooter = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        {/* Icone Social */}
        <Row className="mb-2">
          <Col md={3}>
            <Facebook color="white" size="1rem" style={{ marginRight: "2vmin" }} />
            <Instagram color="white" size="1rem" style={{ marginRight: "2vmin" }} />
            <Twitter color="white" size="1rem" style={{ marginRight: "2vmin" }} />
            <Youtube color="white" size="1rem" />
          </Col>
        </Row>

        {/* Parte dei link */}
        <Row xs={1} sm={2} md={4} lg={4}>
          {/* Prima Colonna */}
          <Col md={3}>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Media Center
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Privacy
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Contact us
              </a>
            </p>
          </Col>

          {/* Seconda Colonna */}
          <Col md={3}>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Audio Description
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Investor Relations
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Legal Notices
              </a>
            </p>
          </Col>

          {/* Terza Colonna */}
          <Col md={3}>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Help Center
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Jobs
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Cookie Preferences
              </a>
            </p>
          </Col>

          {/* Quarta Colonna */}
          <Col md={3}>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Gift Cards
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Terms of Use
              </a>
            </p>
            <p>
              <a href="#" alt="footer link" className="text-secondary">
                Corporate Information
              </a>
            </p>
          </Col>
        </Row>

        {/* Pulsante e Copyright */}
        {/* Row del button */}
        <Row className="mb-2">
          <Col lg={12}>
            <Button type="button" className="btn-sm footer-button rounded-0 mt-3">
              Service Code
            </Button>
          </Col>
        </Row>
        {/* Row del Copyright */}
        <Row className="mb-2 mt-2 copyright">
          {" "}
          <Col md={3}>© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default NetflixFooter;
