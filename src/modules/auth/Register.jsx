import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: ""
    };
  }
  register(mail) {
    console.log("Sending: ", mail);
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mail: mail
      })
    });
    // .then(() => this.props.history.push("/"));
  }
  render() {
    const { mail } = this.state;
    return (
      <div>
        <div className="loginCont">
          <label>E-Mail</label>

          <input
            onChange={({ target }) => this.setState({ mail: target.value })}
            autoComplete="off"
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
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
