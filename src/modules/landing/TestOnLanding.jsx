import React, { Component } from "react";
import { Link } from "react-router-dom";
import { JS, CPP, CS, JAVA } from "../moduleExports.js";

class TestOnLanding extends Component {
  getPicture = title => {
    switch (title) {
      case "JavaScript":
        return JS;
      case "C++":
        return CPP;
      case "C#":
        return CS;
      case "Java":
        return JAVA;
      default:
        return JS;
    }
  };

  render() {
    return (
      <div className="testPreviewCont">
        <Link to={"test/" + this.props.id}>
          <div className="testName">{this.props.title}</div>
          <img
            className="testImage"
            src={this.getPicture(this.props.title)}
            alt="Loading..."
          />
          <div className="testBtn">TEST</div>
        </Link>
      </div>
    );
  }
}

export default TestOnLanding;
