var MongoClient = require('mongodb').MongoClient;
var url = "223.229.176.152/32";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});