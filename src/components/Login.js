import React, { useState } from 'react';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import storeToken from './utils/authHelper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login', {
        email,
        password,
      })
      .then((res) => {
        storeToken(res.data);
      });
    console.log(email, password);
  };

  return (
    <Container>
      <Header>Login to CoffeePot</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Enter email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Enter Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
