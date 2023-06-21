const request = require("request");

// Request infor from API via provided url request
const requestInfo = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    }
    if (body) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        console.log(data[0].description);
      } else {
        console.log('No cat was found.');

      }
    }
  });
}

module.exports = requestInfo;