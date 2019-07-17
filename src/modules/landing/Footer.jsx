import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/contacts">Contacts</Link> <Link to="/faq">FAQ</Link>{" "}
        <div id="fb-root" />
        <div
          className="fb-share-button"
          data-href="https://facebook.com/"
          data-layout="button_count"
          data-size="large"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffacebook.com%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            Поделиться
          </a>
        </div>
        <a
          href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @UniTest
        </a>
      </div>
    );
  }
}

export default Footer;
