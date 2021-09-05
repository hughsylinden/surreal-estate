import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import searchIcon from "../styles/img/search.svg";
import "../styles/SideBar.css";

const SideBar = ({ showFavourites }) => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch} className="search">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button className="sidebar__button" type="submit">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="sidebar-submit__img"
          />
        </button>
      </form>
      {["Manchester", "Sheffield", "Leeds", "Liverpool"].map((property) => (
        <div key={property} className="sidebar_link">
          <Link to={buildQueryString("query", { city: property })}>
            {property.toLowerCase()}
          </Link>
        </div>
      ))}
      <div className="sidebar_link">
        <Link to={buildQueryString("sort", { price: -1 })}>price desc</Link>
      </div>
      <div className="sidebar_link">
        <Link to={buildQueryString("sort", { price: 1 })}>price asc</Link>
      </div>
      <div className="sidebar_link">
        <button id="sidebar__button" type="button" onClick={showFavourites}>
          show favourites
        </button>
      </div>
      <br />
      <Link to="/">
        <button
          className="sidebar__button"
          type="button"
          onClick={() => {
            history.replace("/");
          }}
        >
          clear filter
        </button>
      </Link>
    </div>
  );
};

SideBar.propTypes = {
  showFavourites: PropTypes.func.isRequired,
};

export default SideBar;
