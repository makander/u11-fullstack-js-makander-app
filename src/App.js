import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import UserContextProvider from './context/AuthContext';

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
        <Route path="/dashboard" exact component={Dashboard}></Route>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
