import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Landing from "./modules/landing/Landing";
import Test from "./modules/testView/Test";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import TestOnLanding from "./modules/landing/TestOnLanding";
import MagnifyBadge from "./modules/landing/FilterBadge";
import SearchBar from "./modules/landing/SearchBar";

const div = document.createElement("div");

it("renders without crashing", () => {
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Login renders without crashing`, () => {
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Register renders without crashing`, () => {
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Landing renders without crashing`, () => {
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`MagnifyBadge renders without crashing`, () => {
  ReactDOM.render(<MagnifyBadge />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`SearchBar renders without crashing`, () => {
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`TestOnLanding renders without crashing`, () => {
  ReactDOM.render(<TestOnLanding />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`Test renders without crashing`, () => {
  ReactDOM.render(<Test />, div);
  ReactDOM.unmountComponentAtNode(div);
});
