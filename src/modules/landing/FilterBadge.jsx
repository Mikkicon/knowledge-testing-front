import React, { Component } from "react";

class FilterBadge extends Component {
  render() {
    return (
      <div>
        <div className="filterBadge">
          <div className="filterIcon" />
        </div>
        <input type="checkbox" className="filterToggle" />
        <div className="filterMenu" />
      </div>
    );
  }
}

export default FilterBadge;
