/* eslint-disable no-underscore-dangle */
import axios from "axios";

const getFavourites = async (setFavourites, properties) => {
  await axios
    .get(`http://localhost:4000/api/v1/Favourite`)
    .then((favourites) => {
      if (favourites.data) {
        const favouritesArr = [];
        for (let i = 0; i < favourites.data.length; i += 1) {
          for (let j = 0; j < properties.length; j += 1) {
            if (properties[j]._id === favourites.data[i].propertyListing) {
              favouritesArr.push(properties[j]);
            }
          }
        }
        setFavourites([...new Set(favouritesArr)]);
      }
    });
};

export default getFavourites;
