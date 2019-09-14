import React from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';

const Login = () => {
  return (
    <Container>
      <Header>Login to CoffeePot</Header>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
