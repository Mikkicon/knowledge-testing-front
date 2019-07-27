import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      info: ""
    };
  }
  register(mail) {
    console.log("Sending: ", mail);
    this.setState({ info: "Loading..." });
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mail
      })
    })
      .then(response => response.text())
      .then(result => this.setState({ info: result }))
      .catch(error => console.log(error));
  }
  render() {
    const { mail, info } = this.state;
    return (
      <div>
        <div className="loginCont">
          <label>E-Mail</label>

          <input
            onChange={({ target }) => this.setState({ mail: target.value })}
            className="textInput"
            type="email"
            id="mail"
          />
          <button
            onClick={() => this.register(mail)}
            className="customBtn green auth"
            type="submit"
          >
            Register
          </button>
          <h1>{info}</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
