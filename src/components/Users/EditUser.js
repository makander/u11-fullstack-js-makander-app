import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Checkbox,
  Segment,
  Loader,
} from 'semantic-ui-react';

const EditUser = (props) => {
  const { authStatus } = useContext(AuthContext);
  const { history } = props;
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API}/users/${props.match.params.id}`)
      .then((data) => {
        console.log(data);
        setUser(data.data.result);
      })
      .catch((err) => console.log(err));
  }, [setLoading, props.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_BE_API}/users/edit/${props.match.params.id}`,
        {
          firstName,
          lastName,
          email,
          password,
          isAdmin,
        }
      )
      .then(() => {
        history.push('/users');
      })
      .catch((e) => console.log(e));
  };

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      {!loading ? (
        <Loader active inline="centered" size="large" />
      ) : (
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Update user account for {user.firstName}
          </Header>
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
              <div>
                {authStatus.admin ? (
                  <Checkbox
                    value={isAdmin}
                    style={{ paddingBottom: '2rem' }}
                    onChange={(e) => setAdmin(e.target.value)}
                    label={<label>Enable Admin</label>}
                  />
                ) : null}
              </div>
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
