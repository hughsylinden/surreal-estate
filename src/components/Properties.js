/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import showProperties from "../requests/showProperties";
import deleteProperties from "../requests/deleteProperties";
import Property from "./Property";
import "../styles/Properties.css";
import "../styles/Property.css";
import searchProperties from "../requests/searchProperties";

const Properties = () => {
  const initialState = {
    properties: [],
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [searchInput, setSearchInput] = useState("");
  const [display, setDisplay] = useState(initialState.properties);

  useEffect(async () => {
    showProperties(setProperties, setDisplay);
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    searchProperties(search, setDisplay);
  }, [search]);

  const handleSearchInput = (e) => {
    const arr = properties.filter((property) =>
      property.city.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchInput(e.target.value);
    setDisplay(arr);
  };

  return (
    <div>
      <h1>Properties</h1>
      <SideBar />
      <div className="properties-search">
        <input onChange={handleSearchInput} />
      </div>
      {properties.length > 0 && (
        <div className="properties">
          {display.map((property) => {
            return (
              <div>
                <Property property={property} />
              </div>
            );
          })}
        </div>
      )}
      <button type="submit" onClick={deleteProperties}>
        delete all
      </button>
    </div>
  );
};

export default Properties;
