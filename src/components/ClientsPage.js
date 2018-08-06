import React from "react";
import { connect } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import ClientsDetail from "./ClientsDetail";
import ClientsList from "./ClientsList";
import SearchInput from "./SearchInput";

export const ClientsListPage = props => (
  <Container>
    <Grid columns={2} celled="internally">
      <Grid.Column width={6}>
        <SearchInput />
        <ClientsList />
      </Grid.Column>
      <Grid.Column width={10}>
        <ClientsDetail />
      </Grid.Column>
    </Grid>
  </Container>
);

export default connect(undefined)(ClientsListPage);
