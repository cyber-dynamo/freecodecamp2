import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <header className="navbar-header">
        <img src={logo} className="navbar-logo" alt="logo" />
        <p>
          The mystery of the deep blue sea
        </p>
      </header>
    </div>
  );
}

export default Navbar;
