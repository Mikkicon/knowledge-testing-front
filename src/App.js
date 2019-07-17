import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Landing, Test, Login, Register, Navbar } from "./moduleExports";
import "./styles/test.css";
import "./styles/navbar.css";
import "./styles/landing.css";
import "./styles/filterBadge.css";
import User from "./modules/auth/User";
import Contacts from "./modules/other/Contacts";
/*
/users
/users/:id
/login
/resgister
/tests
/tests/:id
*/

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
          <Route path="/me" component={() => <User testnet={testnet} />} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
