var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
// var MongoClient = require("mongodb").MongoServer;
var url = "mongodb://localhost:27017";


MongoClient.connect(url, function(err, client){

});


app.use(require("./config/routes"));

app.listen(3000, function(){
	console.log("running");
});