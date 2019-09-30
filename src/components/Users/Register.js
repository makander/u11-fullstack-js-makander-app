import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

const Register = (props) => {
  const { history } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BE_API}/users/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then(() => {
        history.push('/login');
      })
      .catch((e) => console.log(e));
  };

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" color="green">
              Submit
            </Button>
          </Segment>
          <div>
            <Message>
              Already have an account? <Link to={'/login'}>Login here</Link>
            </Message>
          </div>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
