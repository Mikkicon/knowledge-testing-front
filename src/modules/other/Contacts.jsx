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
          <div className="whatWeDoRight">
            <div>
              <p>
                This site provides free and premium tests to test your knowledge
                in some spheres of programming
              </p>
              <h2>Our contact information:</h2>
            </div>
            <br />
            <br />
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
              <FontAwesomeIcon icon={faGlobe} />
              https://www.linkedin.com/in/mikhail-p-85b181106/
            </a>
          </div>
        </div>
        <div className="galleryContainer">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={ME}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CEO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={ME}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CTO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={ME}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CDO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={ME}>
              <img src={ME} alt="Misha" />
            </a>
            <div className="desc">
              <b>CMO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={TRAVEL}>
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
            initialCenter={{ lat: 50.4501, lng: 30.5234 }}
          >
            <Marker position={{ lat: 50.4501, lng: 30.5234 }} />
          </Map> */}
        </div>
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
//   apiKey: 
// })(Contacts);
export default Contacts;
