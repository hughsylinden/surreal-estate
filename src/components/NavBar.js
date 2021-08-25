import React from "react";
import "../styles/NavBar.css";
import logo from "../styles/img/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">view properties</li>
        <li className="navbar-links-item">add a property</li>
      </ul>
    </div>
  );
};

export default NavBar;
