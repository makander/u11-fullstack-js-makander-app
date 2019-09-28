import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-dom';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Checkbox,
  Segment,
  Loader,
} from 'semantic-ui-react';
import uuid from 'uuid';

const EditForm = (props) => {
  const [loading, setLoading] = useState(true);
  const { authStatus } = useContext(AuthContext);
  const { history, user } = props;
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setAdmin] = useState(Boolean);
  const [password, setPassword] = useState('');
  //const [user, setUser] = useState({});

  return (
    <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
      {!loading ? (
        <Loader active inline="centered" size="large" />
      ) : (
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Message size="large">
              {console.log(props)}
              Update user account for user: {user.user.firstName}
              {props.user.lastName}
            </Message>
          </Header>
          <Form size="large" onSubmit={props.handleSubmit}>
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
                {authStatus.user.isAdmin ? (
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

export default EditForm;
