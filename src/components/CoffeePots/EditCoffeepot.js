import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Header,
  Container,
  TextArea,
  Grid,
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
      .get(`http://localhost:5000/api/coffeepots/${props.match.params.id}`)
      .then((data) => {
        setCoffeePot([data.data.result]);
      })
      .catch((err) => console.log(err));
  }, [setLoading, props.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/coffeepots/edit/${props.match.params.id}`,
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
          <Header textAlign="center" size="huge">
            Update to CoffeePot
          </Header>
          {coffeePot.map((item) => (
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Title"
                  onChange={(e) => setName(e.target.value)}
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
          ))}
        </Container>
      )}
    </Grid>
  );
};

export default EditCoffeePot;
