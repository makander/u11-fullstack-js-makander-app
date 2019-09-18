import React, { useEffect } from 'react';

import Axios from 'axios';

const Dashboard = () => {
  useEffect(() => {
    Axios.get('http://localhost:5000/dashboard', {
      withCredentials: true,
    }).then((res) => console.log(res));
  });

  return 'this is Dashboard';
};

export default Dashboard;
