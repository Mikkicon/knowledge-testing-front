import React, { Component } from "react";

class TestResults extends Component {
  render() {
    const { time, correct } = this.props;
    return (
      <div className="resultsCont">
        <h2>RESULTS</h2>
        <div className="columns">
          <div className="column">
            <p>Correct: {correct}</p>
            <p>Time: {time}</p>
            <p style={{ opacity: "0.5" }}>Better then: {90 + "%"}</p>
          </div>
          <span className="divider" />
          <div className="column">
            <h3>SHARE</h3>
            <div className="shares">
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
              <br />
              <a
                href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @UniTest
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestResults;
