import "../styles/Alert.css";
import React from "react";
import PropTypes from "prop-types";

const Alert = ({ success, message }) => {
  let className = "";
  if (success) {
    className = "success-message";
  } else {
    className = "failure-message";
  }
  return message && <div className={className}>{message}</div>;
};

Alert.propTypes = {
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
