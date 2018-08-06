import React from "react";
import { List, Image } from "semantic-ui-react";

const ClientsListItem = props => {
  return (
    <List.Item>
      <Image avatar src={props.general.avatar} />
      <List.Content>
        <List.Header as="a">
          {props.general.firstName} {props.general.lastName}
        </List.Header>
        <List.Description>{props.job.title}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ClientsListItem;
