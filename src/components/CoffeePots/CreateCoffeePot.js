import React, { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Form,
  Header,
  Container,
  TextArea,
  Grid,
} from 'semantic-ui-react';

const CreateCoffeePot = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ip, setip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/coffeepots/create', {
      title,
      description,
      ip,
    });
  };
  return (
    <Grid columns={2} padded="vertically">
      <Container>
        <Header textAlign="center" size="huge">
          Register to CoffeePot
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea
              rows={3}
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>IP-Adress</label>
            <input
              type="text"
              value={ip}
              placeholder="IP-Adress"
              onChange={(e) => setip(e.target.value)}
            />
          </Form.Field>

          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>
      </Container>
    </Grid>
  );
};

export default CreateCoffeePot;
