var app = angular.module("vote");

app.service("voteService",function($http){
	this.getVotes = function() {
		return $http.get("/vote").then(function(response){
			return response.data;
		})
	}
	
	this.postVotes = function(newitem) {
		return $http.post("/vote",newitem).then(function(response){
			return response.data;
		})
		
	}
	
	this.removeVotes = function(id) {
		return $http.delete("/vote/" + id).then(function(response){
			return "you item has been deleted"
		})
	}
	
	this.saveVotes = function(newitem) {
		return $http.put("/vote/"+newitem._id, newitem).then(function(response){
			return response.data;
		})
	}
	
	this.votefunction = function(issue) {
		return $http.put("/vote/"+issue._id, issue).then(function(response){
			return response.data
		})
	}
	
	this.addComment = function(comment,issue) {
		issue.comments.push(comment)
		return $http.put("/vote/"+issue._id,issue).then(function(response){
			return response.data
		})
	}
	
	
})