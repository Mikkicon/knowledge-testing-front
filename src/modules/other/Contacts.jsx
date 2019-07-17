import React, { Component } from "react";
import { DA, TRAVEL } from "../moduleExports.js";
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
          <div className="whatWeDoLeft">
            <p>
              This site provides free and premium tests to test your knowledge
              in some spheres of programming
            </p>
            <h3>Our contact information:</h3>
            <a href="mailto:mikkicon@gmail.com">E-Mail</a>
            <a href="tel:+380939167956">+380939167956</a>
            <a href="https://www.linkedin.com/in/mikhail-p-85b181106/">
              LinkedIN
            </a>
          </div>
          <div className="whatWeDoRight">
            <p>
              This site provides free and premium tests to test your knowledge
              in some spheres of programming
            </p>
            <h3>Our contact information:</h3>
            <a href="mailto:mikkicon@gmail.com">E-Mail</a>
            <a href="tel:+380939167956">+380939167956</a>
            <a href="https://www.linkedin.com/in/mikhail-p-85b181106/">
              LinkedIN
            </a>
          </div>
        </div>
        <div className="galleryContainer">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={TRAVEL} alt="js" />
            </a>
            <div className="desc">
              <b>CEO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={DA} alt="cpp" />
            </a>
            <div className="desc">
              <b>CTO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={DA} alt="cs" />
            </a>
            <div className="desc">
              <b>CDO</b>
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={DA}>
              <img src={DA} alt="java" />
            </a>
            <div className="desc">
              <b>CMO</b>
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
      </div>
    );
  }
}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDPhTs3oNuTxjF18uaYFC8tKtNeRhAgxFI"
// })(Contacts);
export default Contacts;
