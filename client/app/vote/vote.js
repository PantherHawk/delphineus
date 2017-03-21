// Code goes here

'use strict';

angular.module('hackSource', ['index.factory'])

.controller('voteCtrl', ['indexFactory', function (indexFactory) {

    var data = this;

    data.functions = {
      getFeed: function () {
        indexFactory.getJSON(function (response) {
          data.feed = response.index;
        });
      }
    };

    this.functions.getFeed();

    this.upvote = function(e) { e.upvotes++; console.log('in this.upvote');};

    this.downvote = function(e) { e.downvotes++};
  }

])

.directive('myVote', [ function () {
  return {
    restrict: 'E',
    // templateUrl: 'app/vote/vote.html'
  };
}]);

angular.module('index.factory', [])

.factory('indexFactory', [ function () {
  return {
    getJSON: function (next) {
      next({
        'index': {
          1: {
            'id': 1,
            'upvotes': 0,
            'user_actions': {
              'voted': false
            }
          }
        }
      });
    }
  };
}]);