import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./modules/Login";
import Register from "./modules/Register";
/*
/
/users
/users/:id
/login
/resgister
/tests
/tests/:id
*/

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    );
  }
}

export default App;
