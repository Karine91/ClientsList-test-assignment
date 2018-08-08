import clients from "../fixtures/clients";
import clientsReducer from "../../reducers/clients";

test("should set clients", () => {
  const action = {
    type: "SET_CLIENTS",
    clients
  };
  const state = clientsReducer(undefined, action);
  expect(state).toEqual(clients);
});

test("should set default state", () => {
  const state = clientsReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});
