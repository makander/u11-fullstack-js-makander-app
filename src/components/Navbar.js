import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../context/AuthContext';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = (props) => {
  const { history } = props;
  const { authStatus, dispatch } = useContext(AuthContext);

  useEffect(() => {}, [authStatus]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  };

  return (
    <>
      {authStatus.isLoggedIn ? (
        <Menu size="large">
          <Menu.Item fitted="vertically">
            <Link to={'/'}>CoffeePot</Link>
          </Menu.Item>

          <Menu.Item fitted="vertically">
            <Link to={'/users'}>Users</Link>
          </Menu.Item>

          <Menu.Item fitted="vertically">
            <Link to={'/profile'}>Profile</Link>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item name="Logout">
              <button
                className="link-button"
                type="button"
                onClick={handleLogout}>
                Log Out
              </button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      ) : (
        <Menu size="large">
          <Menu.Item fitted="vertically">
            <Link to={'/'}>CoffeePot</Link>
          </Menu.Item>
          <Menu.Item fitted="vertically">
            <Link to={'/login'}>Login</Link>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
};
export default withRouter(Navbar);
