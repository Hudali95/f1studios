import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFullscreen } from "react-icons/bs";
import callLogo from "../assets/kraya-logo-white.svg";
import endCall from "../assets/end-call.svg";
import videoOff from "../assets/video-off.svg";
import micOn from "../assets/mic-on.svg";
import Participants from "./participants";
import Billing from "./billing";
// import callLogo from "../assets/kraya-logo.svg";

export default class layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      billing: true,
    };
  }

  render() {
    return (
      <Container className="p-0 m-0" fluid="true">
        <Row className="p-0 m-0 profileContainer">
          <Col className="p-0  leftSide">
            <div className="profileOverlay"></div>
            <Row className="m-0 profileHeader">
              <Col
                md="6"
                sm="6"
                xs="6"
                className="p-0  pl-5 h-100 d-flex align-items-center callName "
              >
                <div className="text-truncate" style={{ width: "80%" }}>
                  Call with Aishwarya(Gold ear ring)
                </div>
              </Col>
              <Col
                md="6"
                sm="6"
                xs="6"
                className="p-0 pr-5  h-100 d-flex align-items-center hidden-sm-down justify-content-end"
              >
                <Participants />
              </Col>
            </Row>

            <Row className="m-0 profileFooter d-flex align-items-center justify-content-center">
              {" "}
              <Col
                md="3"
                // sm
                className=" p-0 pl-5 h-100 d-flex align-items-center hidden-sm-down"
              >
                <img src={callLogo} alt="logo"></img>
              </Col>
              <Col
                md="6"
                // xs="6"
                className="p-0 callIconsWrapper h-100 d-flex align-items-center justify-content-center "
              >
                <img src={micOn} alt="logo" className="callIcon"></img>
                <img src={videoOff} alt="logo" className="callIcon"></img>
                <img src={endCall} alt="logo" className="callIcon"></img>
              </Col>
              <Col
                md="3"
                className="p-0 pr-5 h-100 d-flex align-items-center hidden-sm-down justify-content-end"
              >
                <div className="billingButton d-flex align-items-center justify-content-center">
                  Start Billig
                </div>
                <div className="exitButton d-flex align-items-center justify-content-center">
                  <BsFullscreen className="m-2" /> Exit full screen
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="3" className="p-0">
            <Billing />
          </Col>
        </Row>
      </Container>
    );
  }
}
