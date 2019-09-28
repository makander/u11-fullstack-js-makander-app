import React, { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authStatus, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    admin: false,
  });

  return (
    <AuthContext.Provider value={{ authStatus, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
