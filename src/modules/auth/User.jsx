import React, { Component } from "react";
import { DA, Statistics } from "../moduleExports.js";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "a@b.c",
      pass: "root"
    };
  }

  render() {
    const { mail, pass } = this.state;
    return (
      <div className="userPageCont">
        <div className="avatarCont">
          <img src={DA} alt="" />
          <br />
          <button className="customBtn blue">Upload</button>
        </div>
        <br />
        <br />
        <div className="userCont">
          <Statistics />
        </div>
        <div className="userCont">
          <label>E-Mail</label>
          <input
            onChange={({ target }) => this.setState({ mail: target.value })}
            className="textInput"
            type="email"
            value={mail}
            id="mail"
          />
          <hr />
          <label>Password</label>
          <input
            onChange={({ target }) => this.setState({ pass: target.value })}
            className="textInput"
            type="password"
            value={pass}
            id="pass"
          />
          <button className="customBtn blue">Save</button>
        </div>
      </div>
    );
  }
}

export default User;
