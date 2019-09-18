import React, { createContext, useReducer } from 'react';
import { userReducer } from '../reducers/UsersReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userLoggedIn, dispatch] = useReducer(userReducer, {});

  return (
    <UserContext.Provider value={{ userLoggedIn, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
