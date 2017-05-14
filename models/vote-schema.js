var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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


module.exports = Vote;
