var express = require("express");
var voteRoute = express.Router();
var Vote = require("../models/vote-schema");

voteRoute

	.get("/", function (req, res) {
		Vote.find(req.body, function (err, votesArray) {
			res.send(votesArray)
		})
	})
	.post("/", function (req, res) {
		newVote = new Vote(req.body);
		newVote.save(function (err, savedVote) {
			res.send(savedVote);
		})
	})
	.delete("/:id", function (req, res) {
		Vote.findByIdAndRemove(req.params.id, function (err, voteToBeDeleted) {
			voteToBeDeleted.remove(function (err) {
				res.send("your vote has been deleted")
			});
		})
	})


	.put("/:id", function (req, res) {
		Vote.findByIdAndUpdate(req.params.id, req.body, {
				new: true
			},
			function (err, editedVote) {
				res.send(editedVote);
			})

	})



module.exports = voteRoute
