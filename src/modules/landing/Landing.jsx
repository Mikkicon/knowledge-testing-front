import React, { Component } from "react";
import TestOnLanding from "./TestOnLanding";
import MagnifyBadge from "./FilterBadge";
import SearchBar from "./SearchBar";

class Landing extends Component {
  render() {
    return (
      <div className="landingCont">
        <div className="allTestsPreviewCont">
          <SearchBar />
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <TestOnLanding key={index} />
          ))}
        </div>
        <button className="loadMoreTests">MORE</button>
        <MagnifyBadge />
        <footer />
      </div>
    );
  }
}

export default Landing;
