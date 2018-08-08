import React from "react";
import { shallow } from "enzyme";
import { ClientsListPage } from "../../components/ClientsPage";
import clients from "../fixtures/clients";

test("should render ClientsListPage", () => {
  const wrapper = shallow(<ClientsListPage detail={clients[0]} />);
  expect(wrapper).toMatchSnapshot();
});
