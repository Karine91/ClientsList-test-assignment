import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import ClientsListItem from "./ClientsListItem";
import { startSetClients } from "../actions/clients";
import selectClients from "../selectors/clients";

class ClientsList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetClients());
  }
  render() {
    return (
      <List selection className="clients-list">
        {this.props.clients.map((client, index) => (
          <ClientsListItem {...client} key={index} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: selectClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientsList);
