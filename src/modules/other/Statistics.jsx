import React, { Component } from "react";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xOffset: 20,
      yOffset: 10,
      scale: 1.5,
      dataInterval: 20
    };
  }
  componentDidMount() {
    this.drawCanvasContent();
  }
  async setupCanvas(canvas) {
    const { width } = this.props;
    const { xOffset, scale, dataInterval } = this.state;

    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.getBoundingClientRect();
    canvas.width = width || 350;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.font = "10px Arial";
    ctx.scale(scale, scale);
    ctx.lineWidth = 1;

    let bottom = canvas.height / 1.5;
    this.setState({ bottom });

    console.log("canvas.height", canvas.height);

    // y coords line
    ctx.moveTo(xOffset, 0);
    ctx.lineTo(xOffset, canvas.height);
    // x coords line
    ctx.moveTo(0, bottom);
    ctx.lineTo(canvas.width, bottom);

    // vertical numbering
    for (let i = 10; i > 0; i--) {
      ctx.fillText(i * 10, 0, bottom - i * dataInterval + 10);
    }

    return ctx;
  }
  async drawCanvasContent() {
    const { values } = this.props;
    const { dataInterval } = this.state;

    const canvas = document.getElementById("myCanvas");
    var ctx = await this.setupCanvas(canvas);

    let bottom = canvas.height / 1.5;
    let grades = values || [100, 10, 70, 30, 100, 45, 65, 40, 20, 30];

    console.log(grades);

    for (let i = 1; i < grades.length; i++) {
      ctx.moveTo(
        i * dataInterval,
        bottom - (grades[i - 1] / 10) * dataInterval + 10
      );
      ctx.fillText(i, i * dataInterval, bottom);
      ctx.lineTo(
        i * dataInterval + dataInterval,
        bottom - (grades[i] / 10) * dataInterval + 10
      );
    }
    ctx.stroke();
  }
  render() {
    return <canvas id="myCanvas" />;
  }
}

export default Statistics;
