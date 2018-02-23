require('../config/config');
var Flickr = require('flickr-set-get');


var FlickrAPI = require("node-flickr");

var keys = {"api_key": process.env.FLICKR_KEY};
flickr = new FlickrAPI(keys);


var apiKey = process.env.FLICKR_KEY;
var options = {};

var client = new Flickr(apiKey, options);


let flickrDownload = function (run) {
    if (run) {
        flickr.get("photos.search", {"tags":"hong kong"}, function(err, result){
            if (err) return console.error(err);
            Object.keys(result.photos["photo"]).forEach(function (photos) {
                console.log(result.photos["photo"][photos].id);
                console.log(result.photos["photo"][photos].owner);

                // client.(result.photos["photo"][photos].id, result.photos["photo"][photos].owner)
            });
        });
    }
};

module.exports = flickrDownload;