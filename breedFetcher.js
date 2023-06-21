const request = require("request");

// Request infor from API via provided url request
const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (body) {
      const data = JSON.parse(body);
      let result = '';
      if (data.length > 0) {
        result = data[0].description;
      } else {
        result = 'No cat was found.';

      }
      callback(null, result);
    }
  });
};

module.exports = fetchBreedDescription;
