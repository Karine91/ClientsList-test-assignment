import React from "react";
import { connect } from "react-redux";
import { Segment, Container, Grid } from "semantic-ui-react";
import ClientsDetail from "./ClientsDetail";
import ClientsList from "./ClientsList";
import SearchInput from "./SearchInput";

export const ClientsListPage = props => (
  <Container className="main-wrapper">
    <Segment>
      <Grid columns={2} celled="internally">
        <Grid.Column width={6}>
          <SearchInput />
          <ClientsList />
        </Grid.Column>
        <Grid.Column width={10}>
          <ClientsDetail {...props.detail} />
        </Grid.Column>
      </Grid>
    </Segment>
  </Container>
);

const mapStateToProps = ({ detail }) => ({ detail });

export default connect(mapStateToProps)(ClientsListPage);
