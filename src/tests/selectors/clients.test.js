import getVisibleClients from "../../selectors/clients";
import clients from "../fixtures/clients";

test("should filter clients by text value", () => {
  const filters = {
    text: "gmail"
  };
  const result = getVisibleClients({ clients, filters });
  expect(result).toEqual([clients[0], clients[3]]);
});
