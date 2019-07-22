import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/contacts">Contacts</Link> <Link to="/faq">FAQ</Link>{" "}
      </div>
    );
  }
}

export default Footer;
