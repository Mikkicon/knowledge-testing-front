import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/auth.css";
import bcrypt from "bcryptjs";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: null,
      pass: null,
      loading: false
    };
    this.login = this.login.bind(this);
    this.encryptPass = this.encryptPass.bind(this);
  }

  encryptPass(pass) {
    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
  }

  login(mail, pass) {
    console.log("Sending: ", mail, pass);
    let encryptedPass = this.encryptPass(pass);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mail: mail,
        pass: encryptedPass
      })
    }).then(() => this.props.history.push("/"));
  }
  render() {
    const { mail, pass, loading } = this.state;
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
            this.setState({ loading: true });
            this.login(mail, pass);
          }}
          className="customBtn green auth"
          type="submit"
        >
          Login
        </button>
        <br />
        <br />
        {loading ? <h1>Loading...</h1> : ""}
      </div>
    );
  }
}

export default withRouter(Login);
