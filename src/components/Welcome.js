import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, Grid, Item, Button, Loader, Segment } from 'semantic-ui-react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import uuid from 'uuid';

const Welcome = (props) => {
  const { authStatus } = useContext(AuthContext);
  const [coffeePots, setCoffeePots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/coffeepots/')
      .then((data) => {
        setCoffeePots(data.data.result);
      })
      .catch((err) => console.log(err));
  }, [setLoading]);

  useEffect(() => {});

  const handleDelete = (id) => {
    console.log('delete');
    axios.delete(`http://localhost:5000/api/coffeepots/delete/${id}`);
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
                <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

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
                      {item.weight}
                      {item.time}
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
    </Grid>
  );
};

export default Welcome;
