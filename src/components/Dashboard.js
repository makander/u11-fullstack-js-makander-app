import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Axios from 'axios';

const Dashboard = () => {
  const { authStatus } = useContext(AuthContext);

  useEffect(() => {
    Axios.get('http://localhost:5000/dashboard', {
      withCredentials: true,
    }).then((res) => console.log(res));
  });

  return (
    <div>{authStatus ? <p>du är inloggad</p> : <p>du är inte inloggad</p>}</div>
  );
};

export default Dashboard;
