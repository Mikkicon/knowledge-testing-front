import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import bcrypt from "bcryptjs";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      pass: "",
      info: ""
    };
    this.login = this.login.bind(this);
    this.encryptPass = this.encryptPass.bind(this);
  }

  encryptPass(pass) {
    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
  }

  async login(mail, pass) {
    console.log("Sending: ", mail, pass);
    let encryptedPass = this.encryptPass(pass);
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mail: mail,
        pass: encryptedPass
      })
    });
    if (response.status === 200) {
      let { token } = await response.json();
      !sessionStorage.getItem("token") &&
        sessionStorage.setItem("token", token);
      this.props.history.push("/");
    } else {
      this.setState({ info: "Authentication failed" });
    }
  }

  render() {
    const { mail, pass, info } = this.state;
    return (
      <div className="loginCont">
        <label>E-Mail</label>

        <input
          onChange={({ target }) => this.setState({ mail: target.value })}
          className="textInput"
          type="email"
          id="mail"
        />
        <label>Password</label>

        <input
          onChange={({ target }) => this.setState({ pass: target.value })}
          className="textInput"
          type="password"
          id="pass"
        />
        <button
          onClick={() => {
            this.setState({ info: "Loading..." });
            this.login(mail, pass);
          }}
          className="customBtn green auth"
          type="submit"
        >
          Login
        </button>
        <br />
        <br />
        <h1>{info}</h1>
      </div>
    );
  }
}

export default withRouter(Login);
