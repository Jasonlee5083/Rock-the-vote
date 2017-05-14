var app = angular.module('vote',[]);

app.controller("voteController", function ($scope, voteService) {
	
		$scope.votes = [];

		voteService.getVotes().then(function (response) {
			$scope.votes = response;
			console.log(response);
		})
		

	$scope.submit = function (input) {
		voteService.postVotes(input).then(function (data) {
			$scope.votes.push(data);
		})
	}

	$scope.remove = function (index, id) {
		voteService.removeVotes(id).then(function (response) {
			$scope.votes.splice(index, 1);
		})
	}

	$scope.save = function (newitem) {
		voteService.saveVotes(newitem);
	}
	
	$scope.upvote = function(issue){
		issue.votescount++
		voteService.votefunction(issue);
	}

	$scope.downvote = function(issue){
		
		if(issue.votescount > 0){
		issue.votescount--
		}
		voteService.votefunction(issue) 
	}

	$scope.addComment = function(comment,issue) {
		voteService.addComment(comment,issue);
		
	}

})

app.filter("title",function(){
	return function(info) {
		if (info === undefined){
			return;
		}
		return  'Title: ' + info;
	}
});

app.filter("description",function(){
	return function(info) {
		if (info === undefined){
			return;
		}
		return  'Description: ' + info;
	}
});

app.filter("vote",function(){
	return function(info) {
		if (info === undefined){
			return;
		}
		return  'Vote: ' + info;
	}
});

app.filter("comments",function(){
	return function(info) {
		if (info === undefined){
			return;
		}
		return  'Comment: ' + info;
	}
});
