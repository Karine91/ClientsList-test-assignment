import filterReducer from "../../reducers/filters";

test("should set clients", () => {
  const text = "gmail";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filterReducer(undefined, action);
  expect(state).toEqual({ text });
});

test("should set default state", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ text: "" });
});
