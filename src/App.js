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
  FAQ,
  TestEditing
} from "./modules/moduleExports.js";
import "./styles/App.scss";
import Coding from "./modules/testView/Coding.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testnet: false,
      testList: [],
      token: null,
      login: null
    };
    this.updateNavBar = this.updateNavBar.bind(this);
  }
  componentDidMount() {
    let login = sessionStorage.getItem("login");
    let token = sessionStorage.getItem("token");
    this.updateNavBar(token, login);
  }
  updateNavBar(token = null, login = null) {
    console.log(token, login);
    if (token && login) {
      this.setState({ token, login });
    } else {
      this.setState({ token: null, login: null });
    }
  }
  render() {
    const { testnet, token, login } = this.state;
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar
            updateNavBar={() => this.updateNavBar()}
            token={token}
            login={login}
          />
          <br />
          <br />
          <br />
          <br />
          <Route
            exact
            path="/"
            component={() => <Landing testnet={testnet} />}
          />
          <Route path="/edit" component={() => <TestEditing />} />
          <Route path="/coding" component={() => <Coding />} />
          <Route
            path="/login"
            component={() => (
              <Login
                updateNavBar={(token, login) => this.updateNavBar(token, login)}
              />
            )}
          />
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
