import React from 'react';
import logo from './logo.svg'; // dont forget to switch the icon
import './App.css';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
};

export default App;
