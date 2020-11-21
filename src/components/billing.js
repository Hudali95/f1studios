import React, { Component } from "react";
import callLogo from "../assets/kraya-logo.svg";
import { Row, Col } from "react-bootstrap";

export default class billing extends Component {
  render() {
    return (
      <div className="billingWrapper">
        <Row className="m-0 billingHeader pl-3 d-flex align-items-center ">
          <Col md="10" className="p-0">
            <img src={callLogo} alt="logo"></img>
          </Col>
        </Row>
        <div className="billingSteps pl-2 d-flex align-items-center justify-content-center">
          Hello
        </div>
        <div className="billingFooter pl-2 d-flex align-items-center justify-content-center"></div>
      </div>
    );
  }
}
