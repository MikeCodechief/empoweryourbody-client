import React from "react";
import { Container, Row, Col } from "reactstrap";

const Intro = () => {
  return (
    <header className="header-img">
      <Container className="h-100" fluid={true}>
        <Row className="h-100 align-items-center">
          <Col className="text-right text-white">
            <h1>Empower your Body</h1>
            <p></p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Intro;
