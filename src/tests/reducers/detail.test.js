import clients from "../fixtures/clients";
import detailReducer from "../../reducers/detail";

test("should set clients", () => {
  const action = {
    type: "SET_DETAIL",
    data: clients[0]
  };
  const state = detailReducer(undefined, action);
  expect(state).toEqual(clients[0]);
});

test("should set default state", () => {
  const state = detailReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});
