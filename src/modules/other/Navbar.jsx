import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  faUser,
  faLock,
  faPhone,
  faPuzzlePiece,
  faLockOpen,
  faUserLock,
  FontAwesomeIcon
} from "../moduleExports.js";

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
              <FontAwesomeIcon icon={faUserLock} /> Auth
              <b className="carret menu" />
            </div>

            <div className="subMenu">
              <Link to="/login">
                <p>
                  <FontAwesomeIcon icon={faLock} /> Login
                </p>
              </Link>
              <hr />
              <Link to="/register">
                <p>
                  <FontAwesomeIcon icon={faLockOpen} /> Signup
                </p>
              </Link>
            </div>
          </div>

          <Link className="menuItem" to="/contacts">
            <div>
              <FontAwesomeIcon icon={faPhone} /> Contacts
            </div>
          </Link>

          <Link className="menuItem" to="/user/">
            <div>
              <FontAwesomeIcon icon={faUser} /> Me
            </div>
          </Link>
          <div className="uniTestName">UniTest</div>
          <div className="burger">
            <input id="navbarToggle" type="checkbox" /> <span /> <span />
            <span />
            <div className="foldNav">
              <Link className="menuItemPhone" to="/">
                <div>
                  <FontAwesomeIcon icon={faPuzzlePiece} /> Tests
                </div>
              </Link>
              <Link className="menuItemPhone" to="/contacts">
                <div>
                  <FontAwesomeIcon icon={faPhone} /> Contacts
                </div>
              </Link>
              <Link className="menuItemPhone" to="/login">
                <div>
                  <FontAwesomeIcon icon={faLock} /> Login
                </div>
              </Link>
              <Link className="menuItemPhone" to="/register">
                <div>
                  <FontAwesomeIcon icon={faLock} /> Signup
                </div>
              </Link>
              <Link className="menuItemPhone" to="/user/">
                <div>
                  <FontAwesomeIcon icon={faUser} /> Me
                </div>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
