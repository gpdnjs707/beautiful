import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div className="about">
        <div className="topSection">
          <div className="topTitle">
            About, <br></br>Top title
          </div>
          <div className="topSection content" data-aos="fade-up">
            <div className="img">
              <img
                src={require("../assets/curology-wK0h-mlvfuc-unsplash.jpg")}
              ></img>
            </div>

            <div className="content">test</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
