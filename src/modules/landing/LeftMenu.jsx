import React, { Component } from "react";

class LeftMenu extends Component {
  render() {
    return (
      <div className="burger">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <div className="leftMenuCont">
          <ul>
            <li>Coding</li>
            <li>Psycology</li>
            <li>Flags</li>
            <li>Movies</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
