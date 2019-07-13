import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <div className="menuItem dropDown">
            <div className="home">
              <b className="menuCarret" />
            </div>
            <Link to="/" className="subMenu">
              Tests
            </Link>
          </div>
          <Link className="menuItem" to="/login">
            <div>Login</div>
          </Link>
          <Link className="menuItem" to="/register">
            <div>Register</div>
          </Link>
          <Link className="menuItem" to="/test">
            <div>Test</div>
          </Link>
          <div className="burger">
            <input type="checkbox" /> <span /> <span />
            <span />
            <div className="leftMenu" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
