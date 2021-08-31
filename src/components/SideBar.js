/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const SideBar = ({ properties }) => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      {properties.map((property) => (
        <div>
          <Link to={buildQueryString("query", { city: property.city })}>
            {property.city}
          </Link>
        </div>
      ))}
      <div>
        <Link to={buildQueryString("sort", { price: -1 })}>price desc</Link>
      </div>
      <div>
        <Link to={buildQueryString("sort", { price: 1 })}>price asc</Link>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  properties: PropTypes.shape({
    property: PropTypes.shape({
      title: PropTypes.string,
      city: PropTypes.string,
      bedrooms: PropTypes.number,
      bathrooms: PropTypes.number,
      price: PropTypes.number,
      email: PropTypes.string,
      type: PropTypes.string,
    }),
  }).isRequired,
};
export default SideBar;
