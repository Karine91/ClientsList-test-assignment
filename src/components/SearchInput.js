import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { setTextFilter } from "../actions/filters";

class SearchInput extends React.Component {
  onChangeSearchInput = e => {
    const value = e.target.value;
    this.props.onChangeSearchInput(value);
  };

  render() {
    return (
      <div className="search-wrapper">
        <Input
          icon="search"
          placeholder="Search..."
          value={this.props.filters.text}
          onChange={this.onChangeSearchInput}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ filters: state.filters });
const mapDispatchToProps = dispatch => ({
  onChangeSearchInput: text => dispatch(setTextFilter(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
