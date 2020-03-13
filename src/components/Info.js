import React from "react";
import { Container, Row, Col } from "reactstrap";

const Info = () => {
  return (
    <section className="product-img pt-5 mt-5">
      <Container className="h-100" fluid={true}>
        <Row>
          <Col className="text-center text-black pb-5 font-weight-light">
            <h1>Empower your Body</h1>
          </Col>
        </Row>
        <Row className="h-100">
          <Col className="text-center text-black">
            <span className="info-icon">
              <i className="fas fa-history"></i>
            </span>
            <h2>Recover</h2>
            <h4></h4>
          </Col>
          <Col className="text-center text-black">
            <span className="info-icon">
              <i className="fas fa-spa"></i>
            </span>
            <h2>Relax</h2>
          </Col>
          <Col className="text-center text-black">
            <span className="info-icon">
              <i className="fas fa-chart-line"></i>
            </span>
            <h2>Power</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
