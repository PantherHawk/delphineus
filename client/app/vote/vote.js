'use strict'

angular.module('hackSource.vote', [])


.controller('VoteCtrl', function($scope, counter, User) {
	$scope.flagVariable = false;
	var userId;
	var resourceId = $scope.resource.id
	User.checkLoggedIn()
	.then(function(user) {
		if (user.user.id === undefined) {
			$scope.flagVariable = true;
		};
		userId = user.user.id; })
	.then(function() {
		$scope.vote = $scope.resource.Likes.length;
		if ($scope.resource.Likes.filter(like => like.UserId === userId).length > 0) {
			$scope.flagVariable = true;
		}
	})
	.catch(function(err) {
		console.log('error', err)
	});

	$scope.upVote = function() {

		if (!$scope.flagVariable) {

			$scope.vote++;
			$scope.flagVariable = true;
			counter.addLikes(resourceId, userId)
			.then(function(data) {
				console.log('successfully added like', data);
			})
			.catch(function(err) {
				console.log('error', err);
			})
		}
	}
})

.directive('myVote', function() {

	return {
		restrict: 'E',
		// scope: {
		// 	upVote: '='
		// },
		templateUrl: 'app/vote/vote.html',
		controller: 'VoteCtrl'
	}
});


