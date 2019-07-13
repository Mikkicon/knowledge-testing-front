import React, { Component } from "react";
import { TestOnLanding, FilterBadge } from "../../moduleExports";

class Landing extends Component {
  render() {
    return (
      <div className="landingCont">
        <div className="allTestsPreviewCont">
          <input className="searchBar" type="text" placeholder="Search..." />
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <TestOnLanding key={index} />
          ))}
        </div>
        <button className="loadMoreTests">MORE</button>
        <FilterBadge />
        <footer />
      </div>
    );
  }
}

export default Landing;
