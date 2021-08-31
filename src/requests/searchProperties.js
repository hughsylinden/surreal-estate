import axios from "axios";

const searchProperties = async (search, setDisplay) => {
  await axios
    .get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
    .then((b) => {
      setDisplay(b.data);
    });
};

export default searchProperties;
