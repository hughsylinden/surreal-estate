/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import FacebookLogin from "../react-facebook-login/src/facebook";
// import logo from "../styles/img/houselogo.svg";
// <img src={logo} alt="logo" className="navbar-logo" />

const NavBar = ({ userId, onLogin, onLogout }) => {
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

      {userId ? (
        <button type="submit" onClick={onLogout}>
          Sign Out
        </button>
      ) : (
        <FacebookLogin
          appId="886987165564805"
          autoLoad
          callback={onLogin}
          render={(renderProps) => (
            <button type="submit" onClick={renderProps.onClick}>
              This is my custom FB button
            </button>
          )}
        />
      )}
    </div>
  );
};

export default NavBar;
