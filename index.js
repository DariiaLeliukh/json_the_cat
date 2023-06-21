const fetchBreedDescription = require("./breedFetcher");

// getting arguments form the console
const arguments = process.argv.slice(2, process.argv.length);

/*
  If we have an aruments, then we can procees with connection
*/
if (arguments.length == 1) {
  const breedName = arguments[0];
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });
} else {
  console.log("No arguments were provided");
}
