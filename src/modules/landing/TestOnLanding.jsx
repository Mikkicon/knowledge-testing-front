import React, { Component } from "react";
import JS from "../../media/JS.png";
import { Link } from "react-router-dom";

class TestOnLanding extends Component {
  render() {
    return (
      <div className="testPreviewCont">
        <Link to="/test">
          <div className="testName">JavaScript</div>
          <img className="testImage" src={JS} alt="Loading..." />
          <div className="testBtn">PLAY</div>
        </Link>
      </div>
    );
  }
}

export default TestOnLanding;
