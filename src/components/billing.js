import React, { Component } from "react";
import callLogo from "../assets/kraya-logo.svg";
import { Row, Col, Container } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import productDetails from "../assets/product.svg";
import paymentInfo from "../assets/credit-card.svg";
import customerDetails from "../assets/contact-information.svg";
import summary from "../assets/Component 1 – 1.png";
import { BiRupee, BiChevronDown, BiPlus } from "react-icons/bi";

export default class billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1,
      activeIndex: 1,
      products: {
        1: {
          index: 1,
          id: 123344343,
          type: "Earring (gold)",
          purity: "14kt",
          Weight: "3.4g",
        },
        2: {
          index: 2,
          id: 109664367,
          type: "Ring (gold)",
          purity: "14kt",
          Weight: "3.4g",
        },
      },
    };
  }
  setActiveStep = (value) => {
    this.setState({
      activeStep: value,
    });
  };
  render() {
    return (
      <div className="billingWrapper">
        <Row className="m-0 billingHeader pl-3 pr-3 d-flex align-items-center ">
          <Col md="10" xs="10" className="p-0 ">
            <img src={callLogo} alt="logo"></img>
          </Col>
          <Col
            md="2"
            xs="2"
            className="p-0 h-100 d-flex align-items-center justify-content-end pr-2 pointer "
            style={{ fontSize: "16px" }}
            onClick={() => this.props.handleBillingSection()}
          >
            <AiOutlineClose />
          </Col>
        </Row>
        <UserSteps
          activeStep={this.state.activeStep}
          setActiveStep={this.setActiveStep}
        />

        <Row className="m-0 billingBody pr-3 pl-3  ">
          <Row className="m-0  billingBodyProductDiv shadow-sm  rounded mt-3">
            <Col md="12" className="p-0">
              <Row className="m-0   navWrapper">
                <Col
                  className={`p-0 pt-2 pb-2 pointer d-flex align-items-center justify-content-center navDiv ${
                    this.state.activeIndex === 1 ? "activeNavDiv" : null
                  }`}
                  style={{
                    color: "#007dfc",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                  onClick={() =>
                    this.setState({
                      activeIndex: 1,
                    })
                  }
                >
                  Product 1
                </Col>
                <Col
                  className={`p-0 pt-2 pb-2 pointer d-flex align-items-center justify-content-center navDiv ${
                    this.state.activeIndex === 2 ? "activeNavDiv" : null
                  }`}
                  style={{
                    color: "#007dfc",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                  onClick={() =>
                    this.setState({
                      activeIndex: 2,
                    })
                  }
                >
                  Product 2
                </Col>
                <Col
                  className={`p-0 pt-2 pb-2 pointer d-flex align-items-center justify-content-center navDiv ${
                    this.state.activeIndex === 0 ? "activeNavDiv" : null
                  }`}
                  onClick={() =>
                    this.setState({
                      activeIndex: 0,
                    })
                  }
                  style={{
                    color: "#007dfc",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  <BiPlus /> Add More
                </Col>
              </Row>
            </Col>
            <ProductDetails
              products={this.state.products[this.state.activeIndex]}
            />
          </Row>
          <OredrSummary />
        </Row>

        <Row className="m-0  billingFooter ">
          <Col
            md="12"
            className="p-0  pl-3 pr-3 grandTotalDiv d-flex align-items-center "
          >
            <div className="mr-auto">Grand Total</div>
            <div className="h-100 d-flex align-items-center">
              <BiRupee className="mr-1" />
              14,000{" "}
              <BiChevronDown
                className="ml-2 pointer h-100 "
                style={{ fontSize: "28px" }}
              />
            </div>
          </Col>
          <Col
            md="12"
            className="p-0 d-flex align-items-center justify-content-center pointer billingSubmitButton"
          >
            Submit &{" "}
            {this.state.step === 1
              ? "go to Customer details"
              : this.state.step === 2
              ? "go to Payments info"
              : "Complete the purchase"}
          </Col>
        </Row>
      </div>
    );
  }
}

class UserSteps extends Component {
  render() {
    return (
      <>
        <Row className="m-0 billingSteps pl-3 pr-3 d-flex align-items-center justify-content-center">
          <Col className="p-0 d-flex flex-column justify-content-center">
            <div className="w-100 d-flex align-items-center justify-content-center billingIcon">
              <img src={productDetails} alt="Product Details"></img>
            </div>
            <div className="w-100 d-flex justify-content-center">
              Product Details
            </div>
          </Col>
          <Col className=" p-0 d-flex flex-column justify-content-center">
            <div className="w-100 align-items-center d-flex justify-content-center billingIcon">
              <img src={customerDetails} alt="Product Details"></img>
            </div>
            <div className="w-100 d-flex justify-content-center">
              Customer Details
            </div>
          </Col>
          <Col className=" p-0 d-flex flex-column justify-content-center">
            <div className="w-100  align-items-center d-flex justify-content-center billingIcon">
              <img src={paymentInfo} alt="Product Details"></img>
            </div>
            <div className="w-100  d-flex justify-content-center">
              Payment Info
            </div>
          </Col>
        </Row>
        <Row
          className="m-0 pl-3 pr-3 pb-3 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#eaeff5" }}
        >
          <Col className=" p-0  p-0 d-flex flex-column justify-content-center">
            {" "}
            <div
              style={{ height: "50px" }}
              className=" align-items-center d-flex justify-content-center"
            >
              <div
                className="stepCount align-items-center d-flex justify-content-center "
                onClick={() => this.props.setActiveStep(1)}
                style={
                  this.props.activeStep === 1
                    ? {
                        backgroundColor: "#3f5672",
                        color: "#fbfcfe",
                      }
                    : null
                }
              >
                1
              </div>
            </div>
          </Col>
          <Col className="   p-0 d-flex flex-column justify-content-center">
            <div
              style={{ height: "50px" }}
              className=" align-items-center d-flex justify-content-center"
            >
              <div
                className="stepCount align-items-center  d-flex justify-content-center"
                onClick={() => this.props.setActiveStep(2)}
                style={
                  this.props.activeStep === 2
                    ? {
                        backgroundColor: "#3f5672",
                        color: "#fbfcfe",
                      }
                    : null
                }
              >
                2
              </div>
            </div>
          </Col>
          <Col className="  p-0 d-flex flex-column justify-content-center">
            <div
              style={{ height: "50px" }}
              className=" align-items-center d-flex justify-content-center"
            >
              <div
                className="stepCount align-items-center  d-flex justify-content-center"
                style={
                  this.props.activeStep === 3
                    ? {
                        backgroundColor: "#3f5672",
                        color: "#fbfcfe",
                      }
                    : null
                }
              >
                3
              </div>
            </div>
          </Col>
          <Col md="8" className="middleBarSpan m-auto"></Col>
        </Row>
      </>
    );
  }
}

function ProductDetails(props) {
  if (props.products === undefined) {
    return (
      <Container
        className="p-0 w-100 d-flex align-items-center justify-content-center"
        style={{ height: "200px" }}
      >
        Please choose from the list
      </Container>
    );
  } else {
    return (
      <>
        {" "}
        <Col md="12" className="displayRow p-0 pl-2 pr-2 ">
          <div className="displayRowLable pt-3 h-25 d-flex align-items-center">
            Model/ Product ID #{" "}
          </div>
          <div className="displayRowBody h-75 d-flex align-items-center ">
            {props.products.id}
          </div>
        </Col>
        <Col md="12" className="displayRow p-0 pl-2 pr-2 ">
          <div className="displayRowLable pt-3 h-25 d-flex align-items-center">
            Product Type{" "}
          </div>
          <div className="displayRowBody h-75 d-flex align-items-center">
            {props.products.type}
          </div>
        </Col>
        <Col md="12" className="displayRow p-0 pl-2 pr-2 ">
          <div className="displayRowLable pt-3 h-25 d-flex align-items-center">
            Purity{" "}
          </div>
          <div className="displayRowBody h-75 d-flex align-items-center">
            {props.products.purity}
          </div>
        </Col>
        <Col md="12" className="displayRow  p-0 pl-2 pr-2 ">
          <div className="displayRowLable pt-3 h-25 d-flex align-items-center">
            Weight
          </div>
          <div className="displayRowBody h-75 d-flex align-items-center">
            {props.products.Weight}
          </div>
        </Col>
      </>
    );
  }
}
function OredrSummary(params) {
  return (
    <Row className="m-0 billingBodyProductDiv billingBodyOrderDiv pb-1 shadow-lg  rounded-lg mt-3 mb-5">
      <Col md="12" className="p-2 text-capitalize">
        ORDER SUMMARY
      </Col>
      <Col
        md="12"
        className="p-0  pl-2 pr-2 h-auto  displayRowLable d-flex align-items-center "
      >
        <div className="mr-auto ">Discount</div>
        <div
          className=" d-flex grandTotalDiv align-items-center h-100"
          style={{ backgroundColor: "#fbfcfe" }}
        >
          <BiRupee className="mr-1 " />
          6993.00
        </div>
      </Col>
      <Col
        md="12"
        className="p-0  pl-2 pr-2 h-auto  displayRowLable d-flex align-items-center "
      >
        <div className="mr-auto ">Taxable Amount</div>
        <div
          className=" d-flex grandTotalDiv align-items-center h-100"
          style={{ backgroundColor: "#fbfcfe" }}
        >
          <BiRupee className="mr-1 " />
          1,87,354.00
        </div>
      </Col>
      <Col
        md="12"
        className="p-0  pl-2 pr-2 h-auto  displayRowLable d-flex align-items-center "
      >
        <div className="mr-auto ">SGST</div>
        <div
          className=" d-flex grandTotalDiv align-items-center h-100"
          style={{ backgroundColor: "#fbfcfe" }}
        >
          <BiRupee className="mr-1" />
          1.5%
        </div>
      </Col>
      <Col
        md="12"
        className="p-0  pl-2 pr-2 h-auto  displayRowLable d-flex align-items-center "
      >
        <div className="mr-auto ">CGST</div>
        <div
          className=" d-flex grandTotalDiv align-items-center h-100"
          style={{ backgroundColor: "#fbfcfe" }}
        >
          <BiRupee className="mr-1" />
          1.5%
        </div>
      </Col>
      <Col
        md="12"
        className="p-0  pl-2 pr-2 h-auto   d-flex align-items-center "
      >
        <img src={summary} alt="summary" className="w-100  summarySvg"></img>
      </Col>
    </Row>
  );
}
