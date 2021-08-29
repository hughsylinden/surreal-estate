/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import showProperties from "../requests/showProperties";
import deleteProperties from "../requests/deleteProperties";
import Property from "./Property";
import "../styles/Properties.css";
import "../styles/Property.css";

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
      <div className="properties-search">
        <input onChange={handleSearchInput} />
      </div>
      <div className="properties">
        {display.map((property) => {
          return (
            <div>
              <Property property={property} />
            </div>
          );
        })}
      </div>
      <button type="submit" onClick={deleteProperties}>
        delete all
      </button>
    </div>
  );
};

export default Properties;
