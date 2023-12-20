import { Button, Col, Row } from "react-bootstrap";
import LineChart from "./LineChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBell, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const HeroSection = () => {
  return (
    <Row>
      <Col md={12} lg={5} className="mb-3">
        <div className="column-block">
          <LineChart />
        </div>
      </Col>
      <Col sm={6} lg={4} className="mb-3">
        <div className="column-block">
          <div className="row-block mb-3">
            <Row>
              <Col className="border-end border-light text-center">Limit Order</Col>
              <Col className="text-center opacity-75">Market Order</Col>
            </Row>
          </div>
          <div className="row-block mb-3 d-flex justify-content-between">
            <div>100x</div>
            <div>Leverage</div>
          </div>
          <div className="row-block mb-3 d-flex justify-content-between">
            <div>20,000</div>
            <div>USD</div>
          </div>
          <div className="row-block mb-3 d-flex justify-content-between">
            <div>100x</div>
            <div>Leverage</div>
          </div>
          <Row>
            <Col><Button variant="warning" className="w-100 fw-bold">Long</Button></Col>
            <Col><Button variant="danger" className="w-100 fw-bold">Short</Button></Col>
          </Row>
        </div>
      </Col>
      <Col sm={6} lg={3} className="mb-3">
        <div className="column-block">
          <div className="row-block d-flex justify-content-between align-items-center fw-bold mb-5">
            <FontAwesomeIcon icon={faBell} />
            Chat
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="chat-body">
            <div className="w-100 mb-4">
              <div className="message-info mb-2">KOL - 19:33</div>
              <div className="message-details">Wowww! I love how this site works. It's got everything I've been looking for for a while now.</div>
            </div>
            <div>

              <div className="d-flex w-100" style={{ height: "44px" }}>
                <input
                  type="text"
                  className="send-message-input"
                  placeholder="Type a message"
                  value=""
                  style={{ color: "black" }}
                />
                <button
                  type="button"
                  className="send-message-button"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HeroSection;
