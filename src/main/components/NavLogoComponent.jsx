import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/NavLogoComponent.css'; 

export default function NavLogoComponent() {
  return (
    <div className="logo-container">
      <span className="logo-text">Il covo</span>
      {/* <img src={logo} alt="Medusa Logo" className="logo-image" /> */}
      <span className="logo-text">di Medusa</span>
    </div>
  );
}