import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <Link to="/">/</Link>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
          <Link to="/test">test</Link>
          <div className="burger">
            <span />
            <span />
            <span />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
