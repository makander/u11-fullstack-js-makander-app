import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Link to={'/'}>CoffePot</Link>
      </Menu.Item>

      <Menu.Item position="right" name="Logout">
        <Link to={'/'}>Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
