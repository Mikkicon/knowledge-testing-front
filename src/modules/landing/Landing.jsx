import React, { Component } from "react";
import { TestOnLanding, FilterBadge } from "../../moduleExports";
import { isNumber } from "util";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageAmount: 0,
      tests: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkParams = this.checkParams.bind(this);
    this.loadPage = this.loadPage.bind(this);
  }

  checkParams(page, dir) {
    return (
      isNumber(page) && page >= 0 && (dir === 1 || dir === -1 || dir === 0)
    );
  }

  loadPage(newCurrentPage) {
    fetch(`http://localhost:3000/tests?page=${newCurrentPage}`)
      .then(response => response.json())
      .then(({ tests, pageAmount }) =>
        this.setState({ tests, pageAmount, currentPage: newCurrentPage })
      )
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
    const { currentPage, pageAmount, tests } = this.state;
    return (
      <div className="landingCont">
        <div className="allTestsPreviewCont">
          <input className="searchBar" type="text" placeholder="Search..." />
          {tests.map((_, index) => (
            <TestOnLanding number={index + 1} key={index} />
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
        <FilterBadge />
        <footer />
      </div>
    );
  }
}

export default Landing;
