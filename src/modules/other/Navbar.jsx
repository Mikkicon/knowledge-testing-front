import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <div className="menuItem dropDown">
            <div className="home">
              <b className="carret menu" />
            </div>
            <div className="subMenu">
              <Link to="/">Tests</Link>
              <hr />
              <Link to="/contacts">Contacts</Link>
            </div>
          </div>
          <Link className="menuItem" to="/login">
            <div>Login</div>
          </Link>
          <Link className="menuItem" to="/register">
            <div>Signup</div>
          </Link>
          <Link className="menuItem" to="/user/">
            <div>Me</div>
          </Link>
          <div className="burger">
            <input type="checkbox" /> <span /> <span />
            <span />
            <div className="foldNav" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
