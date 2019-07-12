import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import Test from "./modules/testView/Test";
import Navbar from "./modules/Navbar";
import "./styles/test.css";
import "./styles/navbar.css";
import "./styles/testPreview.css";
import "./styles/magnifyBadge.css";
import Landing from "./modules/landing/Landing";
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
      testList: [],
      testData: {
        title: "JavaScript",
        questions: [
          "What is closure?",
          "What is better func expression or func declaration?",
          "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
          "Repellat accusantium non vel voluptatibus facere nihil eos!",
          "Repellat accusantium non vel voluptatibus modi qui quos quisquam aspernatur deleniti saepe eum quod!"
        ],
        answers: [
          [
            "A closure is the combination of a function and the lexical environment within which that function was declared.",
            "A closure is the combination of a function and the lexical environment within which that function was declared.",
            "A closure is the combination of a function and the lexical environment within which that function was declared.",
            "A closure is the combination of a function and the lexical environment within which that function was declared."
          ],
          [
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!"
          ],
          [
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!"
          ],
          [
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!"
          ],
          [
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!",
            "Repellat accusantium non vel voluptatibus facere nihil eos sapiente quaerat modi qui quos quisquam aspernatur deleniti saepe eum quod!"
          ]
        ]
      }
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
          <br />
          <Route exact path="/" component={() => <Landing />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route
            path="/test"
            component={() => <Test testData={this.state.testData} />}
          />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
