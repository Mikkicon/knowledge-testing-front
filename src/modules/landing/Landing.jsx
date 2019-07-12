import React, { Component } from "react";
import TestOnLanding from "./TestOnLanding";
import MagnifyBadge from "./MagnifyBadge";
import SearchBar from "./SearchBar";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="allTestsPreviewCont">
          <SearchBar />
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <TestOnLanding key={index} />
          ))}
        </div>

        <MagnifyBadge />
      </div>
    );
  }
}

export default Landing;
