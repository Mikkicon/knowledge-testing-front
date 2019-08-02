import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  faUser,
  faLock,
  faPhone,
  faPuzzlePiece,
  faLockOpen,
  faUserLock,
  FontAwesomeIcon,
  faDoorOpen
} from "../moduleExports.js";

class Navbar extends Component {
  render() {
    const { token, login, updateNavBar } = this.props;
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
            <div>
              {" "}
              <div className="subMenu">
                {token ? (
                  <button
                    onClick={() => {
                      sessionStorage.removeItem("token");
                      sessionStorage.removeItem("login");
                      updateNavBar();
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faDoorOpen} />
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <FontAwesomeIcon icon={faLock} /> Login
                  </Link>
                )}

                {/* <hr /> */}

                <Link to="/register">
                  <FontAwesomeIcon icon={faLockOpen} /> Signup
                </Link>
              </div>
            </div>
          </div>

          <Link className="menuItem" to="/contacts">
            <div>
              <FontAwesomeIcon icon={faPhone} /> Contacts
            </div>
          </Link>

          <Link className="menuItem" to="/user/">
            <div>
              <FontAwesomeIcon icon={faUser} />{" "}
              {login ? login.toUpperCase() : "Me"}
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
              {token ? (
                <button
                  onClick={() => {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("login");
                    updateNavBar();
                  }}
                >
                  <div>
                    {" "}
                    <FontAwesomeIcon icon={faDoorOpen} />
                    Logout
                  </div>
                </button>
              ) : (
                <Link className="menuItemPhone" to="/login">
                  <div>
                    <FontAwesomeIcon icon={faLock} /> Login
                  </div>
                </Link>
              )}
              <Link className="menuItemPhone" to="/register">
                <div>
                  <FontAwesomeIcon icon={faLock} /> Signup
                </div>
              </Link>
              <Link className="menuItemPhone" to="/user/">
                <div>
                  <FontAwesomeIcon icon={faUser} />{" "}
                  {login ? login.toUpperCase() : "Me"}
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
