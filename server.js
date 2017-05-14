var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

mongoose.connect('mongodb://localhost/rock-vote',function(err){
	if (err) throw err;
	console.log("Connected to DB");
	
});

var voteRoute = require("./routes/vote-route")	

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/vote",voteRoute)

app.listen(8000,function() {

	console.log("server up at 8000")
});

