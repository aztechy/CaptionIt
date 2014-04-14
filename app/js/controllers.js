'use strict';

angular.module('captionIt.controllers', [])
.controller('MainCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.leadingCaption = '???';
	$scope.captionList = [
		{
			text: 'Cock-a-doodle...do!',
			votes: 0
		},
		{
			text: 'Early bird gets the worm!',
			votes: 0
		},
		{
			text: 'That is one way to get a head!',
			votes: 0
		},
		{
			text: 'In mother Russia, turkey eat you!',
			votes: 0
		},
	];
	$scope.userHasVoted = false;
	$scope.imageOfTheDaySrc = 'http://files.sharenator.com/comedy_caption_gooble_that_490-s490x383-83007-580.jpg';
	
	$scope.getCaptionToUse = function() {
		return $scope.leadingCaption;
	}
	
	$scope.addCaption = function() {
		if (angular.isDefined($scope.caption) && $scope.caption.text.length) {
			var newCaption = {
				text: $scope.caption.text,
				votes: 0
			}
			$scope.captionList.push(newCaption);
			$scope.caption.text = '';
		} else {
			return false;
		}
	}
	
	$scope.upVote = function(oCaption) {
		if (!$scope.userHasVoted) {
			// Increase this captions vote counter.
			oCaption.votes += 1;
	
			// Resort the list based on vote counts
			$scope.captionList = $filter('orderBy')($scope.captionList, '-votes', false);
			$scope.leadingCaption = $scope.captionList[0].text;
			$scope.userHasVoted = true;
		} else {
			alert('You have already voted...thanks for participating!');
		}
	}
}]);