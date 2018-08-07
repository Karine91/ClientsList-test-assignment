import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { setDetail } from "../actions/detail";

export class ClientsListItem extends Component {
  onClickItem = () => {
    const { address, contact, general, job } = this.props;
    this.props.dispatch(setDetail({ address, contact, general, job }));
  };

  render() {
    return (
      <List.Item className="clients-list__item" onClick={this.onClickItem}>
        <Image src={this.props.general.avatar} wrapped size="tiny" />
        <List.Content>
          <List.Header>
            {this.props.general.firstName} {this.props.general.lastName}
          </List.Header>
          <List.Description>{this.props.job.title}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default connect()(ClientsListItem);
