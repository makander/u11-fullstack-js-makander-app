import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Welcome from './components/Welcome';
import EditCoffeePot from './components/CoffeePots/EditCoffeepot';

import UserContextProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import EditUser from './components/Users/EditUser';
import ListUsers from './components/Users/ListUsers';
import Profile from './components/Users/Profile';
import axios from 'axios';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header className="header">
          <Navbar component={Navbar} />
        </Header>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route
          path="/coffeepot/edit/:id"
          exact
          component={EditCoffeePot}></Route>
        <ProtectedRoute
          path="/users/edit/:id"
          exact
          component={EditUser}></ProtectedRoute>
        <ProtectedRoute
          path="/profile"
          exact
          component={Profile}></ProtectedRoute>
        <ProtectedRoute
          path="/users"
          exact
          component={ListUsers}></ProtectedRoute>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
