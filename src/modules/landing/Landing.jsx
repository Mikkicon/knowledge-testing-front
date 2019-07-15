import React, { Component } from "react";
import { TestOnLanding, FilterBadge } from "../../moduleExports";
import { isNumber } from "util";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageAmount: 0,
      selectedHardneses: new Set(),
      filteredTests: [],
      searchQuery: "",
      tests: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkParams = this.checkParams.bind(this);
    this.filterResult = this.filterResult.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.searchManager = this.searchManager.bind(this);
  }

  checkParams(page, dir) {
    return (
      isNumber(page) && page >= 0 && (dir === 1 || dir === -1 || dir === 0)
    );
  }

  searchManager(input) {
    // debugger;

    let { hardness, searchQuery } = input;
    let selectedHardneses = new Set(this.state.selectedHardneses);
    let filteredTests = [...this.state.tests];

    switch (Object.keys(input)[0]) {
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
      .catch(err => console.log(err));
  }

  handleClick(currentPage, direction) {
    if (this.checkParams(currentPage, direction)) {
      let newCurrentPage = currentPage + direction;
      this.loadPage(newCurrentPage);
    } else {
      console.log("handleClick() Invalid params:", currentPage, direction);
    }
  }

  componentDidMount() {
    this.loadPage(0);
  }

  render() {
    const { currentPage, pageAmount, filteredTests } = this.state;
    return (
      <div className="landingCont">
        <div className="allTestsPreviewCont">
          <input
            onChange={e => this.searchManager({ searchQuery: e.target.value })}
            className="searchBar"
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
            className="loadMoreTests"
          >
            PREV 10
          </button>

          <b>
            {currentPage + 1} / {pageAmount}
          </b>

          <button
            disabled={currentPage + 1 === pageAmount}
            onClick={() => this.handleClick(currentPage, 1)}
            className="loadMoreTests"
          >
            NEXT 10
          </button>
        </div>

        <FilterBadge searchManager={this.searchManager} />

        <footer />
      </div>
    );
  }
}

export default Landing;
