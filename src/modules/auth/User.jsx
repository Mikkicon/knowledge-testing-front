import React, { Component } from "react";
import DA from "../../media/default-avatar.png";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "a@b.c",
      pass: "root"
    };
  }
  componentDidMount() {
    this.drawCanvasContent();
  }

  async setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = 350;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.scale(1.5, 1.5);
    ctx.lineWidth = 1;
    // y coords line
    ctx.moveTo(20, 0);
    ctx.lineTo(20, canvas.height);
    // x coords line
    ctx.moveTo(0, 150);
    ctx.lineTo(canvas.width, 150);
    ctx.font = "10px Arial";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
      ctx.fillText(100 - i * 10, 0, 10 + i * 15);
    }

    return ctx;
  }
  async drawCanvasContent() {
    const canvas = document.getElementById("myCanvas");
    var ctx = await this.setupCanvas(canvas);

    let grades = [[68], [74], [73], [73], [73]];
    let interval = Math.floor(
      (Math.floor(canvas.width / 2) / grades.length) * 0.8
    );
    console.log(interval);

    for (let i = 1; i < grades.length; i++) {
      console.log(i, "---", Math.floor((grades[i][0] % 60) / 10) * 20);
      ctx.fillText("f", i * interval, 160);
      ctx.fillText("3", i * interval, 170);
      ctx.moveTo(
        i * interval,
        125 - Math.floor((grades[i - 1][0] % 60) / 10) * 30
      );

      ctx.fillStyle = "white";
      ctx.lineTo(
        i * interval + interval,
        125 - Math.floor((grades[i][0] % 60) / 10) * 30
      );
    }
    ctx.fillText("f", 40, 160);
    ctx.fillText("f", 40, 170);
    ctx.stroke();
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
          <canvas id="myCanvas" />
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
