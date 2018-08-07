import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { setTextFilter } from "../actions/filters";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onChangeSearchInput = e => {
    const value = e.target.value;
    this.setState(() => ({ search: value }));
    this.props.dispatch(setTextFilter(value));
  };

  render() {
    return (
      <div className="search-wrapper">
        <Input
          icon="search"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.onChangeSearchInput}
        />
      </div>
    );
  }
}

export default connect()(SearchInput);
