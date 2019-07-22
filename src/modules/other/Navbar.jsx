import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <Link className="menuItem" to="/">
            <div className="home" />
          </Link>
          <div className="menuItem dropDown">
            <div>
              Auth
              <b className="carret menu" />
            </div>

            <div className="subMenu">
              <Link to="/login">
                <p>Login</p>
              </Link>
              <hr />
              <Link to="/register">
                <p>Signup</p>
              </Link>
            </div>
          </div>

          <Link className="menuItem" to="/contacts">
            <div>Contacts</div>
          </Link>

          <Link className="menuItem" to="/user/">
            <div>Me</div>
          </Link>
          <div className="burger">
            <input id="navbarToggle" type="checkbox" /> <span /> <span />
            <span />
            <div className="foldNav">
              <Link className="menuItemPhone" to="/">
                Tests
              </Link>
              <Link className="menuItemPhone" to="/contacts">
                Contacts
              </Link>
              <Link className="menuItemPhone" to="/login">
                <div>Login</div>
              </Link>
              <Link className="menuItemPhone" to="/register">
                <div>Signup</div>
              </Link>
              <Link className="menuItemPhone" to="/user/">
                <div>Me</div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
