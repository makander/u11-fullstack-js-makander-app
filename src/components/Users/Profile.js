import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

import {
  Button,
  Form,
  Grid,
  Image,
  Message,
  Segment,
  Loader,
} from 'semantic-ui-react';

const EditUser = (props) => {
  const { authStatus } = useContext(AuthContext);
  const { history } = props;
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_BE_API}users/edit/${authStatus.user._id}`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then(() => {
        history.push('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      {!loading ? (
        <Loader active inline="centered" size="" />
      ) : (
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src="/logo.png" />
          <Message>
            You current proile is set to use the following credentials:
            <br /> Your email is: {authStatus.user.email}
            <br />
            First name: {authStatus.user.firstname}
            <br />
            Last name: {authStatus.user.lastName}
            <br />
            Email: {authStatus.user.email}
          </Message>

          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Enter new name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                value={lastName}
                placeholder="Enter new last name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                value={email}
                placeholder="Enter new email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type="password"
                value={password}
                placeholder="Enter a new password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" color="green">
                Submit
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      )}
    </Grid>
  );
};

export default EditUser;
