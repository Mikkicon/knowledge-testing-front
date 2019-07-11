import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./modules/Login";
import Register from "./modules/Register";
import Test from "./modules/Test";
import Navbar from "./modules/Navbar";
import "./styles/test.css";
import "./styles/navbar.css";
import Landing from "./modules/Landing";
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
      testList: []
    };
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <br />
          <Route exact path="/" component={() => <Landing />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route path="/test" component={() => <Test />} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
