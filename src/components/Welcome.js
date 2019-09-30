import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Grid,
  Item,
  Button,
  Loader,
  Segment,
  Image,
} from 'semantic-ui-react';
import { AuthContext } from '../context/AuthContext';
import logo from '../coffee-maker.svg';
import axios from 'axios';
import uuid from 'uuid';

const Welcome = (props) => {
  const { authStatus } = useContext(AuthContext);
  const [coffeePots, setCoffeePots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios

      .get(`${process.env.REACT_APP_BE_API}/coffeepots`)
      .then((data) => {
        setCoffeePots(data.data.result);
      })
      .catch((err) => console.log(err));
  }, [setLoading]);

  useEffect(() => {});

  const handleDelete = (id) => {
    console.log('delete');
    axios.delete(`${process.env.REACT_APP_BE_API}coffeepots/delete/${id}`);
    setCoffeePots(coffeePots.filter((coffeePot) => coffeePot._id !== `${id}`));
  };

  return (
    <Grid container centered columns={1}>
      <Grid.Row>
        <Header size="huge">Welcome to CoffePot</Header>
      </Grid.Row>

      {!loading ? (
        <Loader active inline="centered" size="large" />
      ) : (
        <Segment stacked>
          <Item.Group divided>
            {coffeePots.map((item) => (
              <Item key={uuid()}>
                <Image size="tiny" src={logo} />
                <Item.Content>
                  <Item.Header
                    as="h5"
                    color="teal"
                    textalign="center"
                    key={uuid()}>
                    {item.name}
                  </Item.Header>

                  {item.status.map((item) => (
                    <Item.Description key={uuid()}>
                      Current weight: {item.weight}
                      <br />
                      Measurement taken: {item.time}
                    </Item.Description>
                  ))}
                  <Item.Meta key={uuid()}>{item.description}</Item.Meta>
                  {authStatus.isLoggedIn ? (
                    <Item.Extra key={uuid()}>
                      <Link
                        className="ui focused button tiny primary"
                        to={`/coffeepot/edit/${item._id}`}>
                        Edit
                      </Link>
                      {authStatus.user.isAdmin ? (
                        <Button
                          className="ui focused tiny orange"
                          onClick={() => handleDelete(`${item._id}`)}>
                          Delete buton
                        </Button>
                      ) : null}
                    </Item.Extra>
                  ) : null}
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Segment>
      )}
      <div className="ui vertical footer segment">
        <div className="ui container">
          <div>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons">
              Smashicons
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Welcome;
