import React, { Component } from "react";
import { JS, CPP, JAVA } from "../moduleExports";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: 0,
      picAmount: 3
    };
    this.slidePage = this.slidePage.bind(this);
  }
  slidePage(param) {
    this.setState(
      state => ({ currentPic: state.currentPic + param }),
      () =>
        (window.document.getElementById(
          "row"
        ).style.transform = `translate(${this.state.currentPic * -450}px)`)
    );
  }

  render() {
    const { currentPic, picAmount } = this.state;
    return (
      <div>
        <div className="sliderScreen">
          <div className="sliderSlider">
            <button
              disabled={currentPic < 1}
              onClick={() => this.slidePage(-1)}
              id="left"
              className="sliderCircle sliderLeft"
            >
              <i className="sliderArrow" />
            </button>
            <div id="row">
              <div className="sliderSliderImage">
                <img id="a" src={JS} alt="" />
              </div>
              <div className="sliderSliderImage">
                <img id="b" src={CPP} alt="" />
              </div>
              <div className="sliderSliderImage">
                <img id="c" src={JAVA} alt="" />
              </div>
            </div>
            <button
              disabled={currentPic > picAmount - 2}
              onClick={() => this.slidePage(1)}
              id="right"
              className="sliderCircle sliderRight"
            >
              <i className="sliderArrow" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
