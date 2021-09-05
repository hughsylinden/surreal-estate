/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from "react";
import PropTypes from "prop-types";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import FacebookLogin from "../react-facebook-login/src/facebook";

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
              Login
            </button>
          )}
        />
      )}
    </div>
  );
};

NavBar.propTypes = {
  userId: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
