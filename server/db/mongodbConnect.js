/**
 * Created by starsky on 5/26/17.
 */
const mongo = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
let db;

mongo.connect(process.env.MONGODB_URI.toString(), {auto_reconnect: true}, function (err, database) {
    if (err) throw err;
    db = database;
    db.collection('rawtweets').find({}, (err, rawTweets) => {
        if (err) {
            console.log(err);
        } else {
            rawTweets.forEach((tweet) => {
                console.log(tweet);
            });
        }
    });
    console.log(`data base open...`);
});

exports.findAllRawTweets = function () {
    return new Promise(function (resolve, reject) {
        db.collection('rawtweets').find({}, (err, rawTweets) => {
            if (err) {
                reject(err);
            } else {
                resolve(rawTweets);
            }
        });
    });
};