import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import {
  App,
  Landing,
  Test,
  Login,
  Register,
  TestOnLanding,
  Filter
} from "./modules/moduleExports";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { shape } from "prop-types";

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {}
  }
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) }
});

export function mountWrap(node) {
  return mount(node, createContext());
}

export function shallowWrap(node) {
  return shallow(node, createContext());
}

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: false
});

describe("'Renders without crashing tests: '", () => {
  const div = document.createElement("div");

  it("renders without crashing", () => {
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`Login renders without crashing`, () => {
    ReactDOM.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`Register renders without crashing`, () => {
    ReactDOM.render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
      div
    );
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

  it(`Filter renders without crashing`, () => {
    ReactDOM.render(<Filter />, div);
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
  let props;
  let component;
  const wrappedShallowLanding = () => shallowWrap(<Landing {...props} />);
  const wrappedMountLanding = () => mountWrap(<Landing {...props} />);

  beforeEach(() => {
    props = {};
    if (component) component.unmount();
  });
  it("Choose answer: ", () => {
    const wrapper = shallow(<Test />);
    const currentTests = wrapper.state().userAnswers;
    wrapper.instance().chooseAnswer(0);
    expect(wrapper.state().userAnswers.length).toEqual(+currentTests + 1);
  });
  it("Pagination [loadPage]: ", () => {
    const wrapper = wrappedShallowLanding();
    wrapper.instance().loadPage(0);
    const currentTests = wrapper.state().tests;
    wrapper.instance().loadPage(1);
    expect(wrapper.state().tests.length).toEqual(0);
  });
  it("sortManager: ", () => {
    const wrapper = wrappedShallowLanding();
    wrapper.instance().sortManager("title", 1);
    const currentFilteredTests = wrapper.state().filteredTests.slice(-1)[0];
    wrapper.instance().sortManager("title", 1);
    expect(wrapper.state().filteredTests[0]).toEqual(currentFilteredTests);
    console.log(currentFilteredTests, wrapper.state());
  });
});
