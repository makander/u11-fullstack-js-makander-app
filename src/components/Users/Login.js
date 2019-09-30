import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Header,
  Segment,
  Image,
  Grid,
  Message,
} from 'semantic-ui-react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Login = (props) => {
  const { history } = props;
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BE_API}/users/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        dispatch({
          type: 'LOGIN',
          payload: res.data.user,
        });

        history.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Submit</Button>
          </Segment>
          <div>
            <Message>
              Don't have an account? Sign up <Link to={'/register'}>here</Link>
            </Message>
          </div>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
