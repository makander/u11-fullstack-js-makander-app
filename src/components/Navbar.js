import React, { useContext } from 'react';

import { UserContext } from '../context/UserContext';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  const { dispatch } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
      userLoggedIn: false,
    });
  };

  return (
    <Menu>
      <Menu.Item>
        <Link to={'/'}>CoffePot</Link>
      </Menu.Item>

      <Menu.Item position="right" name="Logout">
        <Link to={'/'} onClick={handleLogout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
