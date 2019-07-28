import React, { Component } from "react";
import {
  DA,
  TRAVEL,
  ME,
  FontAwesomeIcon,
  faMailBulk,
  faPhone,
  faGlobe
} from "../moduleExports.js";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class Contacts extends Component {
  render() {
    // const mapStyles = {
    //   width: "100%",
    //   height: "100%"
    // };
    return (
      <div>
        <div className="whatWeDoCont">
          <p>
            This site provides free and premium tests to test your knowledge in
            some spheres of programming
          </p>
          <br />
          <h3>Our contact information:</h3>
          <br />
          <div className="whatWeDoRight">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:mikkicon@gmail.com"
            >
              <FontAwesomeIcon icon={faMailBulk} /> mikkicon@gmail.com
            </a>
            <br />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+380939167956"
            >
              <FontAwesomeIcon icon={faPhone} /> +380939167956
            </a>
            <br />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mikhail-p-85b181106/"
            >
              <FontAwesomeIcon icon={faGlobe} />{" "}
              https://www.linkedin.com/in/mikhail-p-85b181106/
            </a>
          </div>
        </div>
        <div className="galleryContainer">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CEO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CTO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CDO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CMO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={TRAVEL} alt="Different size" />
            </a>
            <div className="desc">
              <b>Different size</b>
            </div>
          </div>
        </div>
        <div className="googleMap">
          {/* <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          >
            <Marker position={{ lat: 48.0, lng: -122.0 }} />
          </Map> */}
        </div>
        <div className="shares">
          {/* <div id="fb-root" /> */}
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
      </div>
    );
  }
}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDPhTs3oNuTxjF18uaYFC8tKtNeRhAgxFI"
// })(Contacts);
export default Contacts;
