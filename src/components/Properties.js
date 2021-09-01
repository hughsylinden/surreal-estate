import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import showProperties from "../requests/showProperties";
import Property from "./Property";
import "../styles/Properties.css";
import "../styles/Property.css";
import searchProperties from "../requests/searchProperties";

const Properties = () => {
  const initialState = {
    properties: [],
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [display, setDisplay] = useState(initialState.properties);

  useEffect(async () => {
    showProperties(setProperties, setDisplay);
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    searchProperties(search, setDisplay);
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
      <div>
        {properties.length > 0 && (
          <div className="property-map">
            {display.map((property) => {
              return (
                <div>
                  <Property property={property} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
