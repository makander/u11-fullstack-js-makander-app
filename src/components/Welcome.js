import React from 'react';
import {
  Header,
  Grid,
  Button,
  Icon,
  Image,
  Item,
  Label,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Grid container centered columns={1}>
      <Grid.Row>
        <Header size="huge">Welcome to CoffePot</Header>
      </Grid.Row>
      <Item.Group divided>
        <Item>
          <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

          <Item.Content>
            <Item.Header as="a">CoffeePot #1</Item.Header>
            <Item.Meta>Finns i köket</Item.Meta>
            <Item.Description>Det är 2 koppar kaffe kvar</Item.Description>

            <Item.Extra>
              <Label>Delete</Label>
              <Label>Update</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid>
  );
};
export default Welcome;
