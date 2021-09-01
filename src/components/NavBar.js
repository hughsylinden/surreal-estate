import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
// import logo from "../styles/img/houselogo.svg";
// <img src={logo} alt="logo" className="navbar-logo" />

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">add property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
