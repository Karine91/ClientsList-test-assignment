import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
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

test("should set state clients from json", done => {
  const store = createMockStore([]);
  store.dispatch(startSetClients()).then(() => {
    const state = store.getState();
    const actions = store.getActions();
    expect(state).toEqual(clients);
    expect(actions).toEqual([
      {
        type: "SET_CLIENTS",
        clients
      },
      {
        type: "SET_DETAIL",
        data: clients[0]
      }
    ]);
    console.log("what");
    done();
  });
});
