import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const Positions = () => {
  return (
    <>
      <h6>Positions (2) | Open Orders (1)</h6>
      <Container
        className="column-block"
        style={{ height: "250px" }}
        fluid
      >
        <Row className="p-3">
          <Col className="text-secondary">Pair</Col>
          <Col className="text-secondary">Price</Col>
          <Col className="text-secondary">PNL</Col>
          <Col className="text-secondary">Size</Col>
          <Col className="text-secondary">Sl/TP</Col>
          <Col className="text-secondary">Positions</Col>
        </Row>
        <Row className="row-block mb-3">
          <Col>BTC/USDT</Col>
          <Col>$26,982.20</Col>
          <Col className="text-success">+24,83%</Col>
          <Col>1.1BTC</Col>
          <Col>$26,000.00 / $27,000.00</Col>
          <Col>
            <Button
              variant="danger"
              className="fw-bold text-nowrap w-100"
            >
              Close
            </Button>
          </Col>
        </Row>
        <Row className="row-block mb-3">
          <Col>ETH/USDT</Col>
          <Col>$1,563.91</Col>
          <Col className="text-success"> +230,64%</Col>
          <Col>3.4ETH</Col>
          <Col>$1,500.00 $1,650.00</Col>
          <Col>
            <Button
              variant="danger"
              className="fw-bold text-nowrap w-100"
            >
              Close
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Positions;