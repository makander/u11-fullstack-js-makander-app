import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import CreateCoffeePot from './CoffeePots/CreateCoffeePot';
import Axios from 'axios';

/* useEffect(() => {
  Axios.get('http://localhost:5000/')

}); */

const Dashboard = (props) => {
  return (
    <div>
      <CreateCoffeePot></CreateCoffeePot>
    </div>
  );
};

export default Dashboard;
