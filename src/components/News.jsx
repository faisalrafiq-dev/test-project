import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const News = () => {
  return (
    <Row className="mb-2">
      <Col md={12} lg={9} className="mb-3">
        <h5>News</h5>
        <div
          className="column-block overflow-auto"
          style={{ height: "250px" }}
        >
          <div className="row-block d-flex align-items-center justify-content-between mb-3 gap-4">
            <p className="mb-0">
              <span className="ml-2 text-secondary">10m ago. </span>
              Hong Kong to tighten crypto regulation. Thailand to tax crypto overseas: Law Decoded
            </p>
            <Button
              variant="warning"
              className="fw-bold text-nowrap"
              style={{ width: "200px" }}
            >
              Add Currency
            </Button>
          </div>
          <div className="row-block d-flex align-items-center justify-content-between mb-3">
            <p className="mb-0">
              <span className="ml-2 text-secondary">22m ago. </span>
              Biggest Crypto Hack Of The Year: Mixin Network Announces $200,000,000 Exploit
            </p>
            <Button
              variant="warning"
              className="fw-bold text-nowrap"
              style={{ width: "200px" }}
            >
              Add Mixin
            </Button>
          </div>
          <div className="row-block d-flex align-items-center justify-content-between mb-3">
            <p className="mb-0">
              <span className="ml-2 text-secondary">28m ago. </span>
              Chainlink's Price Increased More Than 6% Within 24 hours.
            </p>
            <Button
              variant="warning"
              className="fw-bold text-nowrap"
              style={{ width: "200px" }}
            >
              Add Chainlink
            </Button>
          </div>
          <div className="row-block d-flex align-items-center justify-content-between">
            <p className="mb-0">
              <span className="ml-2 text-secondary">40m ago. </span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              molestias.
            </p>
            <Button
              variant="warning"
              className="fw-bold text-nowrap"
              style={{ width: "200px" }}
            >
              Add Chainlink
            </Button>
          </div>
        </div>
      </Col>
      <Col sm={12} lg={3} className="mb-3">
        <h5>Twitter Feed</h5>
        <div className="column-block overflow-auto"
          style={{ height: "250px" }}>
          <div className="d-flex justify-content-between align-items-center fw-bold">
            <p>Lemon Tree</p>
            <p className="text-secondary">5:20 PM</p>
          </div>
          <p className="border-bottom border-1 pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            rem nisi maxime! Velit voluptates sequi est nam assumenda eius
            repellat doloribus
          </p>
          <div className="d-flex justify-content-between align-items-center fw-bold">
            <p>Lemon Tree</p>
            <p className="text-secondary">5:20 PM</p>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            rem nisi maxime! Velit voluptates sequi est nam assumenda eius
            repellat doloribus
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default News;
