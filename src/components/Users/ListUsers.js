import React, { useEffect, useState } from 'react';
import { Button, Image, List, Container, Loader } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

const ListUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_API}users/`)
      .then((data) => {
        console.log(data);
        setUsers(data.data.result);
      })
      .catch((err) => console.log(err));
  }, [setLoading]);

  const handleDelete = (id) => {
    console.log('delete');
    axios.delete(`${process.env.REACT_APP_BE_API}users/delete/${id}`);
    setUsers(users.filter((user) => user._id !== `${id}`));
  };

  return (
    <Container>
      {!loading ? (
        <Loader active inline="centered" size="large" />
      ) : (
        <List divided verticalAlign="middle">
          {users.map((item) => (
            <List.Item key={uuid()}>
              <List.Content floated="right">
                <Button
                  className="ui focused tiny orange"
                  onClick={() => handleDelete(`${item._id}`)}>
                  Delete
                </Button>
              </List.Content>
              <List.Content floated="right" key={uuid()}>
                <Link
                  floated="right"
                  className="ui focused button tiny primary"
                  to={`/users/edit/${item._id}`}>
                  Edit
                </Link>
              </List.Content>
              <Image
                avatar
                src="https://react.semantic-ui.com/images/avatar/small/lena.png"
              />
              <List.Content key={uuid()}>
                <b>Name:</b> {item.firstName} {item.lastName} <b>email:</b>{' '}
                {item.email}
              </List.Content>
            </List.Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ListUsers;
