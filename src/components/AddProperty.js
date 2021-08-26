import "../styles/AddProperty.css";
import React, { useState } from "react";

const AddProperty = () => {
  const initialState = { fields: { title: "", city: "Manchester" } };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddProperty" onSubmit={handleAddProperty}>
      <form>
        <div className="addproperty__div">
          <label htmlFor="title">
            title:
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="bedrooms">
            bedrooms:
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="bathrooms">
            bathrooms:
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="price">
            price:
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="email">
            email:
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="city">
            city:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label htmlFor="type">
            type:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
