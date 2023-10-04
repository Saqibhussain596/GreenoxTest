import React, { useState } from 'react';
import './Burger.css';

function Burger() {
  const [isOpen, setIsOpen] = useState(false); // Initial state is closed

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the open/close state
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <div className="close-btn" onClick={toggleMenu}>
            Close <i className="fa fa-close"></i>
          </div>
          <li>Home</li>
          <li>Solutions <i className="fa fa-angle-down"></i></li>
          <li>Creative Gallery<i className="fa fa-angle-down"></i></li>
          <li>Insights<i className="fa fa-angle-down"></i></li>
          <li>About<i className="fa fa-angle-down"></i></li>
          <li>Contact</li>
        </ul>
        <div className="login-btn">
          <i className="fa fa-user"></i>Login
        </div>
      </div>
    </div>
  );
}

export default Burger;
