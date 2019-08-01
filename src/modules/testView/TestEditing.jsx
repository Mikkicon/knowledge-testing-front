import React, { Component } from "react";

class TestEditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qNum: 0,
      // string
      currentQuestion: "",
      // [string]
      currentAnswers: ["", "", "", ""],
      //   number
      currentCorrect: null,
      fullTest: { questions: [], answers: [], correct: [] }
    };
    this.writeQuestion = this.writeQuestion.bind(this);
    this.writeAnswer = this.writeAnswer.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.updateTest = this.updateTest.bind(this);

    this.submit = this.submit.bind(this);
  }
  writeQuestion(qNum, question) {
    let questions = this.state.questions.slice(-1);
    questions[qNum] = question;
    console.log(qNum, questions);

    this.setState({ questions });
  }
  writeAnswer(index, answer) {
    let currentAnswers = [...this.state.currentAnswers];
    currentAnswers[index] = answer;
    this.setState({ currentAnswers });

    console.log(currentAnswers);
  }

  updateTest() {
    const {
      currentQuestion,
      currentAnswers,
      currentCorrect,
      fullTest
    } = this.state;
    let answers = [...currentAnswers];
    fullTest["questions"].push(currentQuestion);
    fullTest["answers"].push(answers);
    fullTest["correct"].push(currentCorrect);
    return fullTest;
  }

  handleNextPage(qNum) {
    const fullTest = this.updateTest();
    qNum++;
    this.setState({
      fullTest,
      qNum,
      currentQuestion: "",
      currentAnswers: ["", "", "", ""],
      currentCorrect: null
    });
  }

  submit() {
    const test = this.updateTest();
    const title = window.prompt("Title:", "Anonymous");
    const hardness = window.prompt("Hardness:", 0);
    test["title"] = title;
    test["hardness"] = hardness;
    let body = JSON.stringify(test);
    fetch(`http://localhost:3000/tests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    const {
      qNum,
      currentQuestion,
      currentAnswers,
      currentCorrect,
      fullTest
    } = this.state;
    const answersComp = [0, 1, 2, 3].map(index => (
      <label key={index}>
        <input
          type="radio"
          onChange={() => this.setState({ currentCorrect: index })}
          name="answer"
          checked={index === currentCorrect}
        />

        <input
          type="text"
          className="textInput search"
          onChange={e => this.writeAnswer(index, e.target.value)}
          value={currentAnswers[index]}
        />
        <span className="round checkmark" />
      </label>
    ));

    let allFieldsFilled =
      currentQuestion &&
      currentAnswers.every(answer => answer !== "") &&
      currentCorrect !== null
        ? { display: "flex" }
        : { display: "none" };

    return (
      <div>
        <div className="container">
          <div className="question">
            {qNum + 1}.{" "}
            <input
              type="text"
              className="textInput search"
              onChange={e => this.setState({ currentQuestion: e.target.value })}
              value={currentQuestion}
            />
          </div>
          <div className="answers">{answersComp}</div>
          <div className="testFooter">
            <div className="navigate">
              <span
                style={allFieldsFilled}
                onClick={() => this.handleNextPage(qNum)}
              >
                <i className="arrow right" />
              </span>
              <span style={allFieldsFilled} onClick={() => this.submit()}>
                <i className="arrow end" />
              </span>
            </div>
          </div>
        </div>
        {/* <div>{fullTest.toString()}</div> */}
      </div>
    );
  }
}

export default TestEditing;
