import React, { Component } from "react";
import { DA, Statistics } from "../moduleExports.js";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      pass: "",
      avatar: null,
      oldPass: "",
      response: ""
    };
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  componentDidMount() {
    sessionStorage.setItem("login", "testLogin");
  }
  handleAvatarUpload([avatar]) {
    console.log(avatar);
    // console.log(formData);
    // this.setState({ avatar: avatar.name });
  }

  updateInfo(info) {
    let login = sessionStorage.getItem("login");
    Object.keys(info).filter(a => !info[a] && delete info[a]);
    let body = JSON.stringify(info);
    console.log("Sending: ", body);

    fetch(`http://localhost:3000/user/${login}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    })
      .then(res => this.setState({ response: "Success" }))
      .catch(err => this.setState({ response: "Error" }));
  }

  render() {
    const { mail, pass, avatar, oldPass, response } = this.state;
    setTimeout(() => response && this.setState({ response: null }), 3000);
    return (
      <div className="userPageCont">
        <header>{sessionStorage.getItem("login")}</header>
        <div className="avatarCont">
          <img src={avatar || DA} alt="" />
          <br />
          <div>
            <input
              multiple={false}
              accept="image/png, image/jpeg"
              onChange={e => this.handleAvatarUpload(e.target.files)}
              type="file"
              name="avatar"
            />
            <button className="customBtn blue">Upload</button>
          </div>
        </div>
        <br />
        <br />
        <div className="userCont">
          <label className="contLabel">Statistics</label>
          <Statistics />
        </div>
        <div className="userCont">
          <label className="contLabel">Info</label>
          <label>New E-Mail</label>
          <input
            onChange={({ target }) => this.setState({ mail: target.value })}
            className="textInput"
            type="email"
            value={mail}
            id="mail"
          />
          <hr />
          <label>New Password</label>
          <input
            onChange={({ target }) => this.setState({ pass: target.value })}
            className="textInput"
            type="password"
            value={pass}
            id="pass"
          />
          <hr />
          <label>Password</label>
          <input
            onChange={({ target }) => this.setState({ oldPass: target.value })}
            className="textInput"
            type="password"
            value={oldPass}
            id="oldPass"
          />
          <button
            disabled={!oldPass}
            onClick={() =>
              this.updateInfo({
                mail: mail,
                pass: pass,
                avatar: avatar,
                oldPass: oldPass
              })
            }
            className="customBtn blue"
          >
            Save
          </button>
        </div>
        {response && (
          <div className="userCont">
            <h1>{response}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default User;
