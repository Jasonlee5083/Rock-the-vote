var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.connect("mongodb://localhost/food");
var voteSchema = new Schema({
	title: String,
	desciption: String,
	comments: [String],
	votescount: {
		type: Number,
		default:0
	}
});

var Vote = mongoose.model('Vote', voteSchema);

//var newFood = new Food({
//	name:"apple",
//	calories:95,
//	ingredients:['water','arsonic'],
//	
//})
//
//newFood.save(function(err,newFood):{
//	console.log(newFood,"has been saved")
//			 }
//)

module.exports = Vote;
