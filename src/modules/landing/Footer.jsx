import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Contacts FAQ <div id="fb-root" />
        <div
          class="fb-share-button"
          data-href="https://facebook.com/"
          data-layout="button_count"
          data-size="large"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffacebook.com%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
          >
            Поделиться
          </a>
        </div>
        <a
          href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @UniTest
        </a>
      </div>
    );
  }
}

export default Footer;
