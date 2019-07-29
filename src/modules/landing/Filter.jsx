import React, { Component } from "react";

class Filter extends Component {
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
            <h3>Hardness</h3>
            <br />
            <div className="answers">
              <label>
                <p>Easy</p>
                <input
                  onChange={() => this.props.searchManager({ hardness: 0 })}
                  type="checkbox"
                  name="hardness"
                  id="0"
                />
                <span className=" square checkmark" />
              </label>
              <label>
                <p>Medium</p>
                <input
                  onChange={() => this.props.searchManager({ hardness: 1 })}
                  type="checkbox"
                  name="hardness"
                  id="1"
                />
                <span className="checkmark" />
              </label>
              <label>
                <p>Hard</p>
                <input
                  onChange={() => this.props.searchManager({ hardness: 2 })}
                  type="checkbox"
                  name="hardness"
                  id="2"
                />
                <span className="checkmark square" />
              </label>
            </div>
          </div>

          <hr />
          <div>
            <h3>Completion</h3>
            <br />
            <div className="answers">
              <label>
                <p>All</p>
                <input
                  onChange={() => this.props.searchManager({ hardness: 2 })}
                  type="checkbox"
                  name="completeness"
                  id="all"
                />
                <span className="checkmark square" />
              </label>
              <label>
                <p>Unsolved</p>
                <input
                  onChange={() => this.props.searchManager({ hardness: 2 })}
                  type="checkbox"
                  name="completeness"
                  id="unsolved"
                />
                <span className="checkmark square" />
              </label>
              <label>
                <p>Solved</p>
                <input
                  onChange={() => this.props.searchManager({ hardness: 2 })}
                  type="checkbox"
                  name="completeness"
                  id="solved"
                />
                <span className="checkmark square" />
              </label>
            </div>
          </div>
          <hr />
          <div>
            <h3>Sort</h3>
            <br />
            <button
              className="sortBtn customBtn green"
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

export default Filter;
