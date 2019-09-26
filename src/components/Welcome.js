import React, { useState, useEffect, useContext } from 'react';
import { Header, Grid, Item, Label, ItemHeader } from 'semantic-ui-react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Welcome = () => {
  const { authStatus } = useContext(AuthContext);
  const [coffeePots, setCoffeePots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/coffeepots/')
      .then((data) => {
        setCoffeePots(data.data.result, () => setLoading(false));
        console.log(data.data.result[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container centered columns={1}>
      <Grid.Row>
        <Header size="huge">Welcome to CoffePot</Header>
      </Grid.Row>

      {!loading ? (
        <div>Loading</div>
      ) : (
        <Item.Group divided>
          {console.log(coffeePots)}
          {coffeePots.map((item) => (
            <Item>
              <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

              <Item.Content>
                <ItemHeader>{item.name}</ItemHeader>
                <br />
                {item.status.map((item) => (
                  <Item.Description as="a">
                    {item.weight}
                    {item.time}
                  </Item.Description>
                ))}
                <Item.Meta>{item.description}</Item.Meta>
                <Item.Extra>
                  <Label>Delete</Label>
                  <Label>Update</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      )}
    </Grid>
  );
};

export default Welcome;
