import React, { Component } from "react";

class FilterBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ascending: 1
    };
  }
  render() {
    const { ascending } = this.state;
    return (
      <div>
        <div className="filterBadge">
          <div className="filterIcon" />
        </div>
        <input type="checkbox" className="filterToggle" />
        <div className="filterMenu">
          <div>
            Hardness
            <br />
            <label htmlFor="easy">Easy</label>
            <input
              onChange={() => this.props.searchManager({ hardness: 0 })}
              type="checkbox"
              name="hardness"
              id="0"
            />
            <label htmlFor="medium">Medium</label>
            <input
              onChange={() => this.props.searchManager({ hardness: 1 })}
              type="checkbox"
              name="hardness"
              id="1"
            />
            <label htmlFor="hard">Hard</label>
            <input
              onChange={() => this.props.searchManager({ hardness: 2 })}
              type="checkbox"
              name="hardness"
              id="2"
            />
          </div>
          <hr />
          <div>
            Completion
            <br />
            <label htmlFor="all">All</label>
            <input type="checkbox" name="hardness" id="all" />
            <label htmlFor="unsolved">Unsolved</label>
            <input type="checkbox" name="hardness" id="unsolved" />
            <label htmlFor="solved">Solved</label>
            <input type="checkbox" name="hardness" id="solved" />
          </div>
          <hr />
          <div>
            Sort
            <br />
            <button
              className="sortBtn"
              onClick={() =>
                this.setState(
                  state => ({ ascending: state.ascending * -1 }),
                  () => this.props.sortManager("title", ascending)
                )
              }
            >
              Name
              <b style={~ascending ? { transform: "rotate(180deg)" } : {}} />
            </button>
            {/* <button onClick={() => this.props.sortManager("")}>
              Questions №
            </button> */}
          </div>
          <hr />
          <div>
            <button
              onClick={() => sessionStorage.clear()}
              className="customBtn green"
            >
              Clear cached tests
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBadge;
