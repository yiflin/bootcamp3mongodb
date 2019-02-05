/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    Schema = mongoose.Schema,
    config = require('./config');

mongoose.connect(config.db.uri, {useNewUrlParser: true});
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    Listing.find({name: 'Library West'}, function (err,list) {
	if (err) throw err;
	console.log('found Library West');
	console.log(list);
});

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({ code: 'CABL'}, function(err, list) {
   if (err) throw err;
   console.log('deleted: ');
   console.log(list);
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({ code: 'PHL'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function(err, list) {
   if (err) throw err;
   console.log('this is being updated ');
   console.log(list);
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    Listing.find({}, function (err,list) {
	if (err) throw err;
	console.log('this is all the listings ');
	console.log(list);   
});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
