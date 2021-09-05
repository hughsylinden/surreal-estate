/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Property from "./Property";
import getFavourites from "../requests/getFavourites";
import searchProperties from "../requests/searchProperties";
import showProperties from "../requests/showProperties";
import "../styles/Properties.css";

const Properties = ({ userId }) => {
  const initialState = {
    properties: [],
    favourites: [],
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [favourites, setFavourites] = useState(initialState.properties);
  const [display, setDisplay] = useState(initialState.properties);

  useEffect(async () => {
    showProperties(setProperties, setDisplay);
  }, []);

  useEffect(async () => {
    getFavourites(setFavourites, properties);
  }, [properties]);

  const { search } = useLocation();
  useEffect(() => {
    searchProperties(search, setDisplay);
  }, [search]);

  const handleSaveProperty = async (propertyId) => {
    const propertyObj = await axios.get(
      `http://localhost:4000/api/v1/PropertyListing/${propertyId}`
    );
    const objToSave = {
      fbUserId: userId,
      propertyListing: propertyObj.data,
    };
    await axios
      .post(`http://localhost:4000/api/v1/Favourite`, objToSave)
      .then(() => {
        const newArr = [objToSave.propertyListing];
        setFavourites(favourites.concat(newArr));
      });
  };

  const handleDeleteFavourite = async (propertyId) => {
    const favourite = await axios.get(
      `http://localhost:4000/api/v1/Favourite/?query={"propertyListing":"${propertyId}"}`
    );
    console.log(favourite.data[0]._id);
    await axios
      .delete(`http://localhost:4000/api/v1/Favourite/${favourite.data[0]._id}`)
      .then(() => {
        setFavourites(favourites.filter((fav) => fav._id !== propertyId));
      });
  };

  const showFavourites = () => {
    setDisplay(favourites);
  };

  return (
    <div className="properties">
      <SideBar properties={properties} showFavourites={showFavourites} />
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
                    onDeleteFavourite={handleDeleteFavourite}
                    favourites={favourites}
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

Properties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Properties;
