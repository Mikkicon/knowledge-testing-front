import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Landing,
  Test,
  Login,
  Register,
  Navbar,
  User,
  Contacts,
  FAQ
} from "./modules/moduleExports.js";
import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testnet: true,
      testList: []
    };
  }
  render() {
    const { testnet } = this.state;
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <Route
            exact
            path="/"
            component={() => <Landing testnet={testnet} />}
          />
          <Route path="/login" component={() => <Login />} />
          <Route path="/test" component={() => <Test />} />
          <Route path="/register" component={() => <Register />} />
          <Route path="/contacts" component={() => <Contacts />} />
          <Route path="/faq" component={() => <FAQ />} />
          <Route path="/user/" component={() => <User testnet={testnet} />} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
