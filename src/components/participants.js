import React, { Component } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import prof1 from "../assets/p3.jpg";
import prof2 from "../assets/p4.jpg";
import prof3 from "../assets/p2.jpg";

export default class participants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <div className="participantsWrapper  d-flex align-items-center justify-content-center">
        <div
          className="h-100 d-flex align-items-center justify-content-centern pointer"
          onClick={() =>
            this.setState({
              visible: !this.state.visible,
            })
          }
        >
          {this.state.visible ? (
            <HiOutlineChevronRight className="randomIcon" />
          ) : (
            <HiOutlineChevronLeft className="randomIcon" />
          )}
        </div>
        {this.state.visible && (
          <div className="h-100 d-flex align-items-center justify-content-center participantsAnimate ">
            <div className="participantsImage d-flex align-items-center justify-content-center overflow-hidden pointer">
              <img src={prof1} alt="participants" className=" "></img>
            </div>
            <div className="participantsImage d-flex align-items-center justify-content-center overflow-hidden pointer">
              {" "}
              <img src={prof2} alt="participants "></img>
            </div>
            <div className="participantsImage d-flex align-items-center justify-content-center overflow-hidden pointer">
              {" "}
              <img src={prof3} alt="participants "></img>
            </div>
          </div>
        )}
      </div>
    );
  }
}
