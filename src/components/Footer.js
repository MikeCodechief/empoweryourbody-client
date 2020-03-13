import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <section className="footer-background">
      <Container className="h-100 pt-5" fluid={true}>
        <Row className="h-50 align-items-center">
          <Col className="text-center text-white inline footer-icons">
            <i className="fab fa-facebook-square px-3"></i>
            <i className="fab fa-instagram px-3"></i>
            <i className="fab fa-linkedin px-3"></i>
            <i className="fab fa-pinterest-square px-3"></i>
            <i className="fab fa-twitter-square px-3"></i>
          </Col>
        </Row>
        <Row className="h-50 align-items-center">
          <Col>
            <p className="text-center text-white">Copyright&copy; 2020</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
