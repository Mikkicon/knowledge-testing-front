import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  faBrain,
  faCode,
  faFlag,
  faFilm,
  faPen,
  FontAwesomeIcon
} from "../moduleExports.js";

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
            <li>
              <Link to="/coding">
                <FontAwesomeIcon icon={faCode} /> Coding
              </Link>
            </li>
            <li>
              <Link style={{ opacity: "0.3" }} to="/">
                <FontAwesomeIcon icon={faBrain} /> Psycology
              </Link>
            </li>
            <li>
              <Link style={{ opacity: "0.3" }} to="/">
                <FontAwesomeIcon icon={faFlag} /> Flags
              </Link>
            </li>
            <li>
              <Link style={{ opacity: "0.3" }} to="/">
                <FontAwesomeIcon icon={faFilm} /> Movies
              </Link>
            </li>
            <li>
              <Link to="/edit">
                <FontAwesomeIcon icon={faPen} /> Create your own
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
