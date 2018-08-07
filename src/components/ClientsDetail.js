import React from "react";
import { Item } from "semantic-ui-react";

const ClientsDetail = props => (
  <Item.Group>
    <Item>
      <Item.Image src={props.general && props.general.avatar} />

      <Item.Content>
        <Item.Header>
          {props.general &&
            `${props.general.firstName} ${props.general.lastName}`}
        </Item.Header>
        <Item.Meta>
          {props.job && `${props.job.title} - ${props.job.company}`}
        </Item.Meta>
        <Item.Description>
          {props.address &&
            `${props.address.zipCode}, ${props.address.country} ${
              props.address.city
            } ${props.address.street}`}
        </Item.Description>
        <Item.Extra>
          {props.contact && `${props.contact.email}, ${props.contact.phone}`}
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ClientsDetail;
