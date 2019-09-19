import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { UserContext } from '../context/UserContext';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = (props) => {
  const { history } = props;
  const { dispatch } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
      userLoggedIn: false,
    });
    history.push('/');
  };

  return (
    <Menu>
      <Menu.Item>
        <Link to={'/'}>CoffePot</Link>
      </Menu.Item>

      <Menu.Item position="right" name="Logout">
        <button className="link-button" type="button" onClick={handleLogout}>
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(Navbar);
