import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "0",
      seconds: "00",
      questionNumber: 1,
      testData: { title: "", questions: [], answers: [] },
      userAnswers: []
    };

    this.secondsPassed = 0;
    this.tick = this.tick.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3000/tests/0")
      .then(rawTest => (rawTest ? rawTest.json() : console.log("REJECT")))
      .then(testData => {
        this.setState({ testData });
        return testData;
      })
      .then(promise =>
        promise ? (this.intervalHandle = setInterval(this.tick, 1000)) : null
      )
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }
  submit() {
    console.log("Submit");
  }

  tick() {
    var min = Math.floor(this.secondsPassed / 60);
    var sec = this.secondsPassed - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + min
      });
    }

    this.secondsPassed++;
  }

  render() {
    const { minutes, seconds, questionNumber, userAnswers } = this.state;
    /*
    {
        title: "JavaScript",
        questions: [
          "What is closure?",
          "What is better func expression or func declaration?"
        ],
        answers: [["A", "B", "C", "D"], ["A", "B", "C", "D"]]
      }
    */
    const { title, questions, answers } = this.props.testData
      ? this.props.testData
      : this.state.testData;
    const answersComp = answers.length
      ? answers[questionNumber - 1].map((answer, index) => (
          <label key={answer}>
            <p>{answer}</p>

            <input
              type="radio"
              value={index}
              checked={userAnswers[questionNumber - 1] === answer}
              onChange={() => {
                let a = userAnswers;
                a[questionNumber - 1] = answer;
                this.setState({ userAnswers: a });
              }}
              name="answer"
            />

            <span className="checkmark" />
          </label>
        ))
      : "";
    const pagesComp = questions.map((q, index) => (
      <span
        key={index}
        className={
          index === questionNumber - 1
            ? "page current"
            : index < questionNumber - 1
            ? "page done"
            : "page"
        }
      />
    ));
    return (
      <div>
        <h2>{title}</h2>
        <div className="container">
          <div className="question">
            {questionNumber}. {questions[questionNumber - 1]}
          </div>
          <div className="answers">{answersComp}</div>
          <div className="footer">
            <div className="pages">{pagesComp}</div>
            <span className="divider" />
            <div className="time">
              <span className="clock" />
              <span id="time">{minutes + ":" + seconds}</span>
            </div>
            <span className="divider" />
            <div className="navigate">
              <span
                onClick={() =>
                  this.setState({
                    questionNumber: questionNumber > 1 ? questionNumber - 1 : 1
                  })
                }
              >
                <i className="arrow left" />
              </span>
              {questionNumber === questions.length ? (
                <span onClick={() => this.submit()}>
                  <i className="arrow end" />
                </span>
              ) : (
                <span
                  onClick={() =>
                    this.setState({
                      questionNumber: questionNumber + 1
                    })
                  }
                >
                  <i className="arrow right" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
