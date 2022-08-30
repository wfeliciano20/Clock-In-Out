import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  
  const history = useHistory();

  return (
    <div>
      <Navbar />
      <div className="body">
        <h1>HomePage</h1>
      </div>
    </div>
  );
};

export default HomePage;