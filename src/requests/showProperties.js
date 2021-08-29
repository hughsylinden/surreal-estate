import axios from "axios";

const showProperties = async (setProperties, setDisplay) => {
  await axios.get(`http://localhost:4000/api/v1/PropertyListing/`).then((b) => {
    setProperties(b.data);
    setDisplay(b.data);
  });
};

export default showProperties;
