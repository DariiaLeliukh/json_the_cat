const requestInfo = require("./requestInfo");

// getting arguments form the console
const arguments = process.argv.slice(2, process.argv.length);

/*
  If we have an aruments, then we can procees with connection
*/
if (arguments.length == 1) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + arguments[0];
  requestInfo(url);
} else {
  console.log("No arguments were provided");
}

