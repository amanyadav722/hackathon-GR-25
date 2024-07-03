import React from 'react';
import { Link } from 'react-router-dom';
import './MenuNavigation.css';

const MenuNavigation = () => {
  return (
    <div className="menu-navigation">
      <Link to="/home">Home</Link>
      <Link to="/history">History</Link>
      <Link to="/details">Details</Link>
    </div>
  );
};

export default MenuNavigation;
