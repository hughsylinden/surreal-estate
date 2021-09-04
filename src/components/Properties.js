/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";
import showProperties from "../requests/showProperties";
import Property from "./Property";
import "../styles/Properties.css";
import "../styles/Property.css";
import searchProperties from "../requests/searchProperties";

const Properties = ({ userId }) => {
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

  const handleSaveProperty = async (propertyId) => {
    const propertyObj = await axios.get(
      `http://localhost:4000/api/v1/PropertyListing/${propertyId}`
    );
    await axios
      .post(`http://localhost:4000/api/v1/Favourite`, propertyObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="properties">
      <SideBar />
      <div>
        {properties.length > 0 && (
          <div className="property-map">
            {display.map((property) => {
              return (
                <div key={property.title}>
                  <Property
                    property={property}
                    userId={userId}
                    onSaveProperty={handleSaveProperty}
                  />
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
