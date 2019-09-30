import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Message,
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';

const EditCoffeePot = (props) => {
  const { history } = props;
  const [coffeePot, setCoffeePot] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ip, setip] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API}coffeepots/${props.match.params.id}`)
      .then((data) => {
        setCoffeePot([data.data.result]);
      })
      .catch((err) => console.log(err));
  }, [setLoading, props.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_BE_API}coffeepots/edit/${props.match.params.id}`,
        {
          name,
          description,
          ip,
        }
      )
      .then(() => history.push('/'));
  };

  return (
    <Grid container centered columns={1}>
      {!loading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <Message size="huge">
            Update CoffeePot: {coffeePot.map((item) => item.name)}
          </Message>
          <Form onSubmit={handleSubmit}>
            {coffeePot.map((item, list, index) => (
              <Segment stacked key={index + 'segment'}>
                <Form.Input
                  key={index + 'name'}
                  id={list.name + 'name'}
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />

                <Form.Input
                  key={index + 'decription'}
                  id={list.description + 'description'}
                  type="text"
                  value={description}
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Form.Input
                  key={index + 'ip'}
                  id={list.ip}
                  type="text"
                  value={ip}
                  placeholder="IP-Adress"
                  onChange={(e) => setip(e.target.value)}
                />

                <Button
                  type="submit"
                  color="green"
                  key={index + 'button'}
                  id={list + 'button'}>
                  Submit
                </Button>
              </Segment>
            ))}
          </Form>
        </Container>
      )}
    </Grid>
  );
};

export default EditCoffeePot;
