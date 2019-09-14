import React from 'react';
//import logo from './logo.svg'; // dont forget to switch the icon
import './App.css';
import { Header } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Header className="header">
        <Navbar />
      </Header>
      <Route path="/" exact component={Welcome}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>
    </Router>
  );
};

export default App;
