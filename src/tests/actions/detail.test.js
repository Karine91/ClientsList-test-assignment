import { setDetail } from "../../actions/detail";
import clients from "../fixtures/clients";

test("should setup set detail action object", () => {
  const action = setDetail(clients[0]);
  expect(action).toEqual({
    type: "SET_DETAIL",
    data: clients[0]
  });
});
