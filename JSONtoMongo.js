'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri, {useNewUrlParser: true});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 	
 */
var redme = JSON.parse(fs.readFileSync('listings.json', 'utf8'));
var list;
for ( var i = 0; i < redme.entries.length; i++) {
  
  list = new Listing ({
  code: redme.entries[i].code,
  name: redme.entries[i].name,
  coordinates: {latitude: redme.entries[i].latitude, longitude: redme.entries[i].longitude},
  address: redme.entries[i].address,
	});
	list.save();
}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */