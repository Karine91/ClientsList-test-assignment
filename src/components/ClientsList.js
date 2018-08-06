import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import ClientsListItem from "./ClientsListItem";
import { startSetClients } from "../actions/clients";

class ClientsList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetClients());
  }
  render() {
    return (
      <List>
        {this.props.clients.map((client, index) => (
          <ClientsListItem {...client} key={index} />
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};

export default connect(mapStateToProps)(ClientsList);
