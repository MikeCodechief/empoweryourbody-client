import React from "react";
import { Container, Row, Col } from "reactstrap";

const Product = () => {
  return (
    <section className="product-img">
      <Container className="h-100" fluid={true}>
        <Row className="h-100 align-items-center">
          <Col className="text-center text-black">
            <h1>Product Detail</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Product;
