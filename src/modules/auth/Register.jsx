import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="loginCont">
          <label>E-Mail</label>

          <input
            autoComplete="off"
            className="textInput"
            type="email"
            id="mail"
          />
          <button className="customBtn green auth" type="submit">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
