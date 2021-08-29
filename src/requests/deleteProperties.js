import axios from "axios";

const deleteProperties = async () => {
  let arr = [];
  await axios.get(`http://localhost:4000/api/v1/PropertyListing/`).then((b) => {
    arr = b.data;
  });
  arr.forEach(async (m) => {
    await axios.delete(`http://localhost:4000/api/v1/PropertyListing/`, m.id);
  });
};

export default deleteProperties;
