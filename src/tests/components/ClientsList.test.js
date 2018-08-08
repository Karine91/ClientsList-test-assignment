import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ClientsListConnect, { ClientsList } from "../../components/ClientsList";

const createMockStore = configureMockStore([thunk]);

test("should render ClientsList", () => {
  const wrapper = shallow(<ClientsList clients={[]} dispatch={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});

test("calls componentDidMoint", () => {
  const store = createMockStore({ filters: { text: "" }, clients: [] });
  sinon.spy(ClientsListConnect.prototype, "componentDidMount");
  const wrapper = mount(<ClientsListConnect store={store} />);
  expect(ClientsListConnect.prototype.componentDidMount.calledOnce).toEqual(
    true
  );
});
