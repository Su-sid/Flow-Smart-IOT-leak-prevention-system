// import React from "react";
import StatusSection from "../components/StatusSection";
import PressureSection from "../components/PressureSection";
import FlowSection from "../components/FlowSection";
import { Row, Col } from "react-bootstrap";

function MainPage() {
  return (
    <>
      <Row>
        <Col md={4}>
          <StatusSection />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <PressureSection />
            </Col>
            <Col md={6}>
              <FlowSection />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default MainPage;
