import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import {
  App,
  Landing,
  Test,
  Login,
  Register,
  TestOnLanding,
  FilterBadge
} from "./moduleExports";

describe("'Renders without crashing tests: '", () => {
  const div = document.createElement("div");

  it("renders without crashing", () => {
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`Login renders without crashing`, () => {
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`Register renders without crashing`, () => {
    ReactDOM.render(<Register />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`Landing renders without crashing`, () => {
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`FilterBadge renders without crashing`, () => {
    ReactDOM.render(<FilterBadge />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`TestOnLanding renders without crashing`, () => {
    ReactDOM.render(
      <BrowserRouter>
        <TestOnLanding />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`Test renders without crashing`, () => {
    ReactDOM.render(<Test />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Snapshot tests (toMatchSnapshot()):", () => {
  it(`<Test/>`, () => {
    const tree = create(<Test />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Empty test as prop to <Test/>:`, () => {
    const tree = create(<Test testData={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Non-Object (3) as prop to <Test/>:`, () => {
    const tree = create(<Test testData={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`<Landing/>`, () => {
    const tree = create(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Functions of Landing", () => {
  it("loadPages: ", () => {
    const component = create(<Landing />);
    const instance = component.getInstance();
    instance.handleClick(-1, 0);
    expect(component).toMatchSnapshot();
  });
});
