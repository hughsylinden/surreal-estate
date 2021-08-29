import axios from "axios";

const getProperties = async (fields, setAlert) => {
  const obj = {
    title: fields.title,
    city: fields.city,
    bedrooms: fields.bedrooms,
    bathrooms: fields.bathrooms,
    price: fields.price,
    email: fields.email,
    type: fields.type,
  };
  await axios
    .post(`http://localhost:4000/api/v1/PropertyListing/`, obj)
    .then(() => setAlert({ success: true, message: "success" }))
    .catch(() => {
      setAlert({ success: false, message: "error" });
    });
};

export default getProperties;
