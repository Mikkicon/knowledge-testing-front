import React, { Component } from "react";
import JS from "../../media/js.png";
import CPP from "../../media/cpp.jpg";
import CS from "../../media/cs.jpg";
import JAVA from "../../media/java.jpg";
import { Link } from "react-router-dom";

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
