import React, { useState, useEffect } from 'react';
import logo from '../assets/images/GumGum_Logo.jpg';
import './Sidebar.css';

const Sidebar = () => {
  const [isDisplayDropdownOpen, setIsDisplayDropdownOpen] = useState(false);
  const [isVideoDropdownOpen, setIsVideoDropdownOpen] = useState(false);
  const [dropdownData_display, setDropdownData_display] = useState([]);
  const [dropdownData_video, setDropdownData_video] = useState([]);

  useEffect(() => {
    fetch('/data/dropdownData_display.json')
      .then((response) => response.json())
      .then((data) => setDropdownData_display(data))
      .catch((error) => console.error('Error loading JSON data:', error));

    fetch('/data/dropdownData_video.json')
      .then((response) => response.json())
      .then((data) => setDropdownData_video(data))
      .catch((error) => console.error('Error loading JSON data:', error));

      const displayDropdownState = localStorage.getItem('displayDropdownState');
      const videoDropdownState = localStorage.getItem('videoDropdownState');
  
      
      if (displayDropdownState !== null) {
        setIsDisplayDropdownOpen(displayDropdownState === 'true');
      }
      if (videoDropdownState !== null) {
        setIsVideoDropdownOpen(videoDropdownState === 'true');
      }
  }, []);

  const toggleDisplayDropdown = () => {
    setIsDisplayDropdownOpen(!isDisplayDropdownOpen);
    localStorage.setItem('displayDropdownState', !isDisplayDropdownOpen);
  };

  const toggleVideoDropdown = () => {
    setIsVideoDropdownOpen(!isVideoDropdownOpen);
    localStorage.setItem('videoDropdownState', !isVideoDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="title">Creative Gallery</h1>
      <div className="border"></div>
      <p className="paragraph">Select a demo below</p>

      <div className={`dropdown ${isDisplayDropdownOpen ? 'open' : ''}`}>
        <div className="dropdown-heading" onClick={toggleDisplayDropdown}>
          <h2>Display</h2>
          <i className={`fa fa-angle-down ${isDisplayDropdownOpen ? 'rotate' : ''}`}></i>
        </div>
        <ul className={`dropdown-list ${isDisplayDropdownOpen ? 'open' : ''}`}>
          {dropdownData_display.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <div className="text">{item.companyName}</div>
                <span className="tag">{item.tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`dropdown ${isVideoDropdownOpen ? 'open' : ''}`}>
        <div className="dropdown-heading" onClick={toggleVideoDropdown}>
          <h2>Video</h2>
          <i className={`fa fa-angle-down ${isVideoDropdownOpen ? 'rotate' : ''}`}></i>
        </div>
        <ul className={`dropdown-list ${isVideoDropdownOpen ? 'open' : ''}`}>
          {dropdownData_video.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <div className="text">{item.companyName}</div>
                <span className="tag">{item.tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
