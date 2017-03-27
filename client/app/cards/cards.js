angular.module('hackSource.cards', [])
.controller('cardsCtrl', function($scope, Data) {

  Data.getAllResources()
    .then(function(data) {
      $scope.data = data;
    });


  $scope.loadMore = function() {
    var last = $scope.data[$scope.data.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.data.push(last + i);
    }
  };

})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});