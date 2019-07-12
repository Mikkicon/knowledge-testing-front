import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Landing from "./modules/Landing";
import Test from "./modules/Test";
import Login from "./modules/Login";
import Navbar from "./modules/Navbar";
import Register from "./modules/Register";
import TestOnLanding from "./modules/TestOnLanding";

const div = document.createElement("div");

it("renders without crashing", () => {
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Landing renders without crashing`, () => {
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Login renders without crashing`, () => {
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it(`Navbar renders without crashing`, () => {
//   ReactDOM.render(<Navbar />, <App />);
//   ReactDOM.unmountComponentAtNode(<App />);
// });

it(`Register renders without crashing`, () => {
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Test renders without crashing`, () => {
  ReactDOM.render(<Test />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`TestOnLanding renders without crashing`, () => {
  ReactDOM.render(<TestOnLanding />, div);
  ReactDOM.unmountComponentAtNode(div);
});
