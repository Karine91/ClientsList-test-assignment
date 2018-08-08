import React from "react";
import { shallow } from "enzyme";
import { SearchInput } from "../../components/SearchInput";
import { Input } from "semantic-ui-react";

let wrapper, onChangeSearchInput;

beforeEach(() => {
  onChangeSearchInput = jest.fn();
  wrapper = shallow(
    <SearchInput
      filters={{ text: "" }}
      onChangeSearchInput={onChangeSearchInput}
    />
  );
});

test("should render SearchInput", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const event = {
    target: {
      value: "text"
    }
  };
  wrapper.find(Input).prop("onChange")(event);
  expect(onChangeSearchInput).toHaveBeenCalled();
});
