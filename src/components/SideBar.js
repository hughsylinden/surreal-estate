import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

const SideBar = () => {
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
          placeholder="Search"
        />
        <button type="submit">search</button>
      </form>
      {["Manchester", "Sheffield", "Leeds", "Liverpool"].map((property) => (
        <div className="sidebar_link">
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
      <Link to="/">
        <button type="button">clear filter</button>
      </Link>
    </div>
  );
};

export default SideBar;
