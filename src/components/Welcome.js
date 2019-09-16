import React, { useState } from 'react';
import { Header, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Welcome = () => {

  return (
    <Grid container centered columns={1}>
      <Header size="huge">Welcome to CoffePot</Header>
      <Grid.Row centered columns={4}>
        <Link to="/login">
          <Button color="green">Login</Button>
        </Link>
        <Link to="/register">
          <Button color="blue">Register</Button>
        </Link>
      </Grid.Row>
    </Grid>
  );
};
export default Welcome;
