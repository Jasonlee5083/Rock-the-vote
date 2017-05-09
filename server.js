var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

mongoose.connect('mongodb://localhost/rock-vote',function(err){
	if (err) throw err;
	console.log("Connected to DB");
	
});

//app.get("/"function(req,res){
//	console.log("working");
//})

var voteRoute = require("./routes/vote-route")	

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

////-------------------------------
//var path = require("path");
//app.use(express.static(path.join(__dirname, "public")));
////--------------------------------


app.use("/vote",voteRoute)

app.listen(8000,function() {

	console.log("server up at 8000")
});


//var friendSchema = new Schema({  
//  name: String,
//  age: Number,
//  interests: [String],
//  friends: [String],
//  isDeveloper: Boolean
//});
//
//var Friend = mongoose.model('Friend', friendSchema);  
//
//var myFriend = new Friend({  
//  name: 'JD',
//  age: 24,
//  interests: ['Music', 'Food'],
//  friends: []
//});
//
////myFriend.save( function (err, new_friend) {  
//// console.log(new_friend);
////});
//
//Friend.find({age: 24}, function (err, friends) {  
//  console.log(err);
//  console.log(friends);
//});