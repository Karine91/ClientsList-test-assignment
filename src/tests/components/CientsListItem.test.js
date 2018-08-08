import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import { List } from "semantic-ui-react";
import { ClientsListItem } from "../../components/ClientsListItem";
import clients from "../fixtures/clients";

const createMockStore = configureMockStore([thunk]);

test("should render ClientsListItem", () => {
  const wrapper = shallow(
    <ClientsListItem {...clients[0]} dispatch={jest.fn()} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should set detail object on click item", () => {
  const store = createMockStore();
  const wrapper = shallow(
    <ClientsListItem {...clients[0]} dispatch={store.dispatch} />
  );
  wrapper.find(List.Item).prop("onClick")(clients[0]);
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: "SET_DETAIL",
    data: clients[0]
  });
});
