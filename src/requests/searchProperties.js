import axios from "axios";

const searchProperties = async (input) => {
  let arr = [];
  await axios.get(`http://localhost:4000/api/v1/PropertyListing/`).then((b) => {
    arr = b.data;
  });
  return arr.filter((property) => property.city.includes(input));
};

export default searchProperties;
