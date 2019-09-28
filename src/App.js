import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import EditCoffeePot from './components/CoffeePots/EditCoffeepot';

import UserContextProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DeleteUsers from './components/Users/DeleteUsers';
import EditUsers from './components/Users/EditUsers';
import ListUsers from './components/Users/ListUsers';
import Profile from './components/Profile';
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
