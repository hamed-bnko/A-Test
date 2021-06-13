import { Button } from "react-bootstrap";
import React from "react";
import { Row, Col } from "react-bootstrap";
import NavBars from "../../common/navBars";

const HomeSection = () => {
  return (
    <div className="main-section">
      <NavBars />
      <Row>
        <Col md={6}>
          <div className="header-content">
            <h2>Some start text</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
            <Row>
              <Button variant="primary" className="m-3 col">
                Get Started Now
              </Button>
              <Button variant="outline-primary col" className="m-3">
                Watch Video
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeSection;
