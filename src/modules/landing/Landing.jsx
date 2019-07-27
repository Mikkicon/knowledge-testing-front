import React, { Component } from "react";
import { TestOnLanding, Filter, Footer, LeftMenu } from "../moduleExports.js";
import { isNumber } from "util";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      pageAmount: 1,
      selectedHardneses: new Set(),
      filteredTests: [],
      searchQuery: "",
      testsData: [],
      tests: [],
      testnetNotification: this.props.testnet && "Testnet"
    };
    this.timeoutHandler = null;
    this.loadPage = this.loadPage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkParams = this.checkParams.bind(this);
    this.filterResult = this.filterResult.bind(this);
    this.sortManager = this.sortManager.bind(this);
    this.searchManager = this.searchManager.bind(this);
  }
  componentDidMount() {
    this.timeoutHandler = setTimeout(
      () => this.props.testnet && this.setState({ testnetNotification: null }),
      3000
    );
    this.loadPage(0);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandler);
  }

  sortManager(sortBy, direction) {
    let filteredTests = [...this.state.filteredTests];
    filteredTests.sort((testA, testB) =>
      testA[sortBy] > testB[sortBy] ? 1 * direction : -1 * direction
    );
    console.log(filteredTests);
    this.setState({ filteredTests });
  }

  searchManager(searchOrFilterInput) {
    let { hardness, searchQuery } = searchOrFilterInput;
    let selectedHardneses = new Set(this.state.selectedHardneses);
    let filteredTests = [...this.state.tests];

    switch (Object.keys(searchOrFilterInput)[0]) {
      case "hardness":
        selectedHardneses.has(hardness)
          ? selectedHardneses.delete(hardness)
          : selectedHardneses.add(hardness);
        this.setState({ selectedHardneses }, () =>
          this.filterResult(filteredTests)
        );
        break;

      case "searchQuery":
        this.setState({ searchQuery }, () => this.filterResult(filteredTests));
        break;

      default:
        break;
    }
  }

  filterResult(filteredTests) {
    const { selectedHardneses, searchQuery, tests } = this.state;
    if (!selectedHardneses.size && !searchQuery) {
      this.setState({ filteredTests: tests });
    } else if (!selectedHardneses.size) {
      filteredTests = filteredTests.filter(
        test =>
          test.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      );
      this.setState({ filteredTests });
    } else {
      filteredTests = filteredTests.filter(
        test =>
          test.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 &&
          selectedHardneses.has(test.hardness)
      );
      this.setState({ filteredTests });
    }
  }

  loadPage(newCurrentPage) {
    const testnetTests = [
      { title: "JavaScript" },
      { title: "C++" },
      { title: "C#" },
      { title: "Java" },
      { title: "JavaScript" },
      { title: "C++" },
      { title: "C#" },
      { title: "Java" },
      { title: "JavaScript" },
      { title: "C++" }
    ];
    fetch(`http://localhost:3000/tests?page=${newCurrentPage}`)
      .then(response => response.json())
      .then(({ tests, pageAmount }) => {
        this.setState({
          tests,
          filteredTests: tests,
          pageAmount,
          currentPage: newCurrentPage
        });
      })
      .catch(err => {
        console.log("Error: ", err);
        this.props.testnet
          ? this.setState({
              tests: testnetTests,
              filteredTests: testnetTests,
              pageAmount: 2,
              currentPage: 0
            })
          : console.log("Testnet disabled.");
      });
  }

  handleClick(currentPage, direction) {
    if (this.checkParams(currentPage, direction)) {
      let newCurrentPage = currentPage + direction;
      this.loadPage(newCurrentPage);
    } else {
      console.log("handleClick() Invalid params:", currentPage, direction);
    }
  }

  checkParams(page, dir) {
    return (
      isNumber(page) && page >= 0 && (dir === 1 || dir === -1 || dir === 0)
    );
  }

  render() {
    const {
      currentPage,
      pageAmount,
      filteredTests,
      testnetNotification
    } = this.state;

    return (
      <div className="landingCont">
        <LeftMenu />
        <div className="allTestsPreviewCont">
          <h1>{testnetNotification}</h1>
          <input
            onChange={e => this.searchManager({ searchQuery: e.target.value })}
            className="textInput search"
            type="text"
            placeholder="Search..."
          />
          {filteredTests.map((test, index) => (
            <TestOnLanding title={test.title} id={index} key={index} />
          ))}
        </div>

        <div className="allTestsPreviewCont">
          <button
            disabled={currentPage === 0}
            onClick={() => this.handleClick(currentPage, -1)}
            className="customBtn green pagination"
          >
            PREV 10
          </button>

          <b>
            {currentPage + 1} / {pageAmount}
          </b>

          <button
            disabled={currentPage + 1 === pageAmount}
            onClick={() => this.handleClick(currentPage, 1)}
            className="customBtn green pagination"
          >
            NEXT 10
          </button>
        </div>

        <Filter
          sortManager={this.sortManager}
          searchManager={this.searchManager}
        />

        <Footer />
      </div>
    );
  }
}

export default Landing;
