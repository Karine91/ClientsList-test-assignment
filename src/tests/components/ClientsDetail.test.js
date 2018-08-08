import React from "react";
import { shallow } from "enzyme";
import ClientsDetail from "../../components/ClientsDetail";
import clients from "../fixtures/clients";

test("should render ClientsDetail", () => {
  const wrapper = shallow(<ClientsDetail {...clients[0]} />);
  expect(wrapper).toMatchSnapshot();
});
