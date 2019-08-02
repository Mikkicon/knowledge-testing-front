import React, { Component } from "react";
import { DA, Statistics } from "../moduleExports.js";
import bcrypt from "bcryptjs";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      mail: "",
      pass: "",
      avatar: null,
      oldPass: "",
      response: "",
      tests: []
    };
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.encryptPass = this.encryptPass.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  componentDidMount() {
    // let token = sessionStorage.getItem("token");
    // this.getUserInfo(token);
  }

  handleAvatarUpload([avatar]) {
    console.log(avatar);
    // console.log(formData);
    // this.setState({ avatar: avatar.name });
  }
  encryptPass(pass) {
    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync(pass, salt);
    return hash;
  }
  deleteAccount() {
    console.log("Deleted");
  }
  updateInfo(info) {
    let token = sessionStorage.getItem("token");
    Object.keys(info).filter(a => !info[a] && delete info[a]);
    info.token = token;
    let encryptedPass = this.encryptPass(info.oldPass);
    info.oldPass = encryptedPass;
    let body = JSON.stringify(info);
    console.log("Sending: ", body);
    if (!token) return;
    fetch(`http://localhost:3000/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body
    })
      .then(res => this.setState({ response: "Success" }))
      .catch(err => this.setState({ response: "Error" }));
  }

  render() {
    const { login, mail, pass, avatar, oldPass, response, tests } = this.state;
    const token = sessionStorage.getItem("token");
    setTimeout(() => response && this.setState({ response: null }), 3000);
    return (
      <div className="userPageCont">
        <header>{sessionStorage.getItem("login") || "Default"}</header>
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
          {token && <Statistics values={tests} />}
        </div>
        {token && (
          <div className="userCont">
            <label className="contLabel">Info</label>
            <label>New Login</label>
            <input
              onChange={({ target }) => this.setState({ login: target.value })}
              className="textInput"
              type="login"
              value={login}
              id="login"
            />
            <hr />
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
              onChange={({ target }) =>
                this.setState({ oldPass: target.value })
              }
              className="textInput"
              type="password"
              value={oldPass}
              id="oldPass"
            />
            <button
              disabled={!(oldPass && (mail || pass))}
              onClick={() =>
                this.updateInfo({ login, mail, pass, avatar, oldPass })
              }
              className="customBtn blue"
            >
              Save
            </button>
            <button
              onClick={() => this.deleteAccount(token)}
              className="customBtn red"
            >
              Delete Account
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default User;
