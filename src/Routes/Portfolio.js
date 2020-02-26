import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactFullpage from "@fullpage/react-fullpage";
import "../css/Portfolio.css";

const Portfolio = () => (
  <ReactFullpage
    // //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    // scrollingSpeed = {1000} /* Options here */
    navigation={true}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="sec1">
              <div className="content">
                <p className="contentTitle">
                  Portfolio <br></br>New world
                </p>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quam faucibus sed elit vivamus posuere. Bibendum orci arcu
                  urna aliquam egestas. Vitae turpis cursus molestie felis
                  aliquam mi. Consequat elit vestibulum nisi, sed etiam.
                </p>
              </div>
              <div className="img">
                <img
                  src={require("../assets/belle-beauty-JPvy3rrWSeM-unsplash.jpg")}
                ></img>
              </div>
            </div>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Portfolio;
