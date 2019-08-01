import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  JS,
  CPP,
  CS,
  JAVA,
  FLAGS,
  MOVIES,
  PSYCOLOGY,
  CODING
} from "../moduleExports.js";

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
      case "Coding":
        return CODING;
      case "Movies":
        return MOVIES;
      case "Psycology":
        return PSYCOLOGY;
      case "Flags":
        return FLAGS;
      default:
        return JS;
    }
  };

  render() {
    return (
      <div style={this.props.style} className="testPreviewCont">
        <Link to={this.props.id}>
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
