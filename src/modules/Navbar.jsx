import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <Link className="menuItem" to="/">
            <div> Home</div>
          </Link>
          <Link className="menuItem" to="/login">
            <div> Login</div>
          </Link>
          <Link className="menuItem" to="/register">
            <div> Register</div>
          </Link>
          <Link className="menuItem" to="/test">
            <div> Test</div>
          </Link>
          <div className="burger">
            <input type="checkbox" /> <span /> <span /> <span />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
