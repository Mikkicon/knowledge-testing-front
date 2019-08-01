import React, { Component } from "react";
import { LEFT, STATS, EDIT, TestOnLanding } from "../moduleExports";
import Footer from "./Footer";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.currentSlide = 0;
    this.carousel = this.carousel.bind(this);
    this.handleinterval = setInterval(this.carousel, 2000);
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearInterval(this.handleinterval);
  }

  carousel() {
    var i;
    var descriptionArray = [
      "Multiple testing fields",
      "Track your statisstics",
      "Create your own tests"
    ];
    var allSlides = document.getElementsByClassName("slides");
    var description = document.getElementById("description");
    for (i = 0; i < allSlides.length; i++) {
      allSlides[i].style.display = "none";
    }
    this.currentSlide++;
    if (this.currentSlide > allSlides.length) {
      this.currentSlide = 1;
    }
    allSlides[this.currentSlide - 1].style.display = "block";
    description.innerText = descriptionArray[this.currentSlide - 1];
  }
  render() {
    return (
      <div>
        <div className="landingSlider">
          <div className="sliderRow">
            <div className="landingHeader">
              <h1>UNITEST</h1>
            </div>
            <h4 id="description">{""}</h4>
            <img src={LEFT} alt="site features" className="slides" id="1" />
            <img src={STATS} alt="site features" className="slides" id="2" />
            <img src={EDIT} alt="site features" className="slides" id="3" />
          </div>
        </div>
        <div className="sectionsMenu">
          <TestOnLanding id={"/coding"} title={"Coding"} />
          <TestOnLanding
            id={"/"}
            style={{ opacity: "0.3" }}
            title={"Psycology"}
          />
          <TestOnLanding id={"/"} style={{ opacity: "0.3" }} title={"Flags"} />
          <TestOnLanding id={"/"} style={{ opacity: "0.3" }} title={"Movies"} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
