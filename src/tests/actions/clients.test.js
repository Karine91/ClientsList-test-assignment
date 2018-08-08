import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import sinon from "sinon";
import $ from "jquery";
import { shallow } from "enzyme";
import ClientsList from "../../components/ClientsList";
import { setClients, startSetClients } from "../../actions/clients";
import clients from "../fixtures/clients";

const createMockStore = configureMockStore([thunk]);

test("should setup set clients action object", () => {
  const action = setClients(clients);
  expect(action).toEqual({
    type: "SET_CLIENTS",
    clients
  });
});

// test("should set state clients from json", done => {
//   const store = createMockStore([]);
//   store.dispatch(startSetClients()).then(() => {
//     console.log($.ajax.calls);
//     done();
//   });

//   // const state = store.getState();
//   // const actions = store.getActions();
//   // expect(state).toEqual(clients);
//   // expect(actions).toEqual([
//   //   {
//   //     type: "SET_CLIENTS",
//   //     clients
//   //   },
//   //   {
//   //     type: "SET_DETAIL",
//   //     data: clients[0]
//   //   }
//   // ]);
// });
