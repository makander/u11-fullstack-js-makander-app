import React from 'react';

import { Button, Form, Header, Container } from 'semantic-ui-react';

const Register = () => {
  return (
    <Container>
      <Header textAlign="center" size="huge">
        Register to CoffeePot
      </Header>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
