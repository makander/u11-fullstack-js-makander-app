import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Grid,
  Item,
  Label,
  ItemHeader,
  Button,
} from 'semantic-ui-react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import uuid from 'uuid';
import { handleRef } from '@stardust-ui/react-component-ref';

const Welcome = () => {
  const { authStatus } = useContext(AuthContext);
  const [coffeePots, setCoffeePots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/coffeepots/')
      .then((data) => {
        setCoffeePots(data.data.result);
        console.log(data.data.result[0]);
      })
      .catch((err) => console.log(err));
  }, [setLoading]);

  const handleDelete = (id) => {
    console.log('delete');
    axios.delete(`http://localhost:5000/api/coffeepots/delete/${id}`);
    setCoffeePots(coffeePots.filter((coffeePot) => coffeePot._id !== `${id}`));
  };

  return (
    <Grid container centered columns={1}>
      {console.log(authStatus)}
      <Grid.Row>
        <Header size="huge">Welcome to CoffePot</Header>
      </Grid.Row>

      {!loading ? (
        <div>Loading</div>
      ) : (
        <Item.Group divided>
          {console.log(coffeePots)}
          {coffeePots.map((item) => (
            <Item key={uuid()}>
              <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

              <Item.Content>
                <ItemHeader key={uuid()}>{item.name}</ItemHeader>
                <br />
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

                    <Button
                      className="ui focused orange tiny primary"
                      onClick={() => handleDelete(`${item._id}`)}>
                      Delete buton
                    </Button>
                  </Item.Extra>
                ) : null}
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      )}
    </Grid>
  );
};

export default Welcome;
