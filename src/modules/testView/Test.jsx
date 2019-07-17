import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "0",
      seconds: "00",
      questionNumber: 1,
      id: window.location.pathname.slice(6),
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
      },
      userAnswers: []
    };

    this.secondsPassed = 0;
    this.tick = this.tick.bind(this);
    this.submit = this.submit.bind(this);
    this.chooseAnswer = this.chooseAnswer.bind(this);
  }
  componentDidMount() {
    const { id } = this.state;
    console.log(id);
    // this.intervalHandle = setInterval(this.tick, 1000);
    if (!sessionStorage.hasOwnProperty(id))
      fetch("http://localhost:3000/tests/" + id)
        .then(rawTest => (rawTest ? rawTest.json() : console.log("REJECT")))
        .then(testData => {
          this.setState({ testData });
          return testData;
        })
        .then(test => sessionStorage.setItem(id, JSON.stringify(test)))
        .catch(err => console.log(err));
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }
  submit() {
    console.log(this.state.userAnswers);
    console.log(
      JSON.stringify({
        answers: this.state.userAnswers,
        time: this.secondsPassed
      })
    );

    fetch("http://localhost:3000/tests/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        answers: this.state.userAnswers,
        time: this.secondsPassed
      })
    })
      .then(rawTest => console.log(rawTest))
      .catch(err => console.log(err));
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
  chooseAnswer(index) {
    let a = this.state.userAnswers;
    a[this.state.questionNumber - 1] = index;
    this.setState({ userAnswers: a });
  }
  render() {
    const { minutes, seconds, questionNumber, userAnswers, id } = this.state;

    let { title, questions, answers } = sessionStorage.hasOwnProperty(id)
      ? JSON.parse(sessionStorage.getItem(id))
      : this.state.testData;

    let answersComp = null,
      pagesComp = null;
    if (!title || !questions || !answers) {
      console.log("missing fieds in setsData");
      answersComp = <div />;
      pagesComp = <div />;
      title = "";
      questions = [];
      answers = [];
    } else {
      answersComp = answers[questionNumber - 1].map((answer, index) => (
        <label key={index}>
          <input
            type="radio"
            value={index}
            checked={userAnswers[questionNumber - 1] === index}
            onChange={() => this.chooseAnswer(index)}
            name="answer"
          />
          <p>{answer}</p>
          <span className="checkmark" />
        </label>
      ));

      pagesComp = questions.map((_, index) => (
        <span
          key={index}
          className={
            index === questionNumber - 1
              ? "page current"
              : userAnswers[index]
              ? "page done"
              : "page"
          }
        />
      ));
    }
    return (
      <div>
        <h2>{title}</h2>
        <div className="container">
          <div className="question">
            {questionNumber}. {questions[questionNumber - 1]}
          </div>
          <div className="answers">{answersComp}</div>
          <div className="testFooter">
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
                <span
                  onClick={() => {
                    if (userAnswers.length === questions.length) {
                      this.submit();
                    } else {
                      alert("Answer all questions please");
                    }
                  }}
                >
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
