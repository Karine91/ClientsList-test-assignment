jest.mock("jquery");
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import sinon from "sinon";
import { setClients, startSetClients } from "../../actions/clients";
import clients from "../fixtures/clients";

const createMockStore = configureMockStore([thunk]);

beforeEach(() => jest.resetModules());

test("should setup set clients action object", () => {
  const action = setClients(clients);
  expect(action).toEqual({
    type: "SET_CLIENTS",
    clients
  });
});
