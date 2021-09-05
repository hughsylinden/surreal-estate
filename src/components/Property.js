/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Property.css";
import bed from "../styles/img/bed.svg";
import bathroom from "../styles/img/bathroom.svg";
import pound from "../styles/img/pound.svg";
import city from "../styles/img/city.svg";
import email from "../styles/img/email.svg";
import type from "../styles/img/house.svg";

const Property = ({
  property,
  userId,
  onSaveProperty,
  onDeleteFavourite,
  favourites,
}) => {
  const [showFavourite, setShowFavourite] = useState(false);
  useEffect(() => {
    if (favourites.map((favourite) => favourite._id).includes(property._id)) {
      setShowFavourite(true);
    } else {
      setShowFavourite(false);
    }
  }, [favourites]);

  return (
    <div className="property">
      <div className="property-item title">{property.title}</div>
      <div className="property-item bedrooms">
        <img className="bedrooms__img" alt="bedrooms" src={bed} />
        {property.bedrooms}
      </div>
      <div className="property-item bathrooms">
        <img className="bathrooms__img" alt="bathrooms" src={bathroom} />
        {property.bathrooms}
      </div>
      <div className="property-item price">
        <img className="price__img" alt="price" src={pound} />
        {property.price}
      </div>
      <div className="property-item city">
        <img className="city__img" alt="city" src={city} />
        {property.city}
      </div>
      <div className="property-item type">
        <img className="type__img" alt="type" src={type} />
        {property.type}
      </div>
      <div className="property-item email">
        <img className="email__img" alt="email" src={email} />
        {property.email}
      </div>
      {}
      {userId > 0 &&
        (showFavourite ? (
          <button
            type="button"
            onClick={() => onDeleteFavourite(property._id, favourites)}
          >
            remove
          </button>
        ) : (
          <button type="button" onClick={() => onSaveProperty(property._id)}>
            save
          </button>
        ))}
    </div>
  );
};

Property.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string,
    city: PropTypes.string,
    bedrooms: PropTypes.string,
    bathrooms: PropTypes.string,
    price: PropTypes.string,
    email: PropTypes.string,
    type: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  favourites: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      city: PropTypes.string,
      bedrooms: PropTypes.string,
      bathrooms: PropTypes.string,
      price: PropTypes.string,
      email: PropTypes.string,
      type: PropTypes.string,
      _id: PropTypes.string,
    })
  ).isRequired,
  userId: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func,
  onDeleteFavourite: PropTypes.func,
};

Property.defaultProps = {
  onSaveProperty: () => {},
};
Property.defaultProps = {
  onDeleteFavourite: () => {},
};
export default Property;
