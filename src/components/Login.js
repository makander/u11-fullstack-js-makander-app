import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = (props) => {
  const { history } = props;
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users/login', {
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: 'LOGIN',
        });
        history.push('/');
      })
      .catch((err) => console.log(err));
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>

      <div>
        <h4>Don't have an account?</h4>
        <p>
          Sign up <Link to={'/register'}>here</Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
