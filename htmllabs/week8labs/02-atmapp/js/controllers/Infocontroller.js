AtmApp.controller('EventController', ['$scope','events', '$routeParams', function($scope, events, $routeParams) {
  events.success(function(data) {

    $scope.transaction = data.transactions[$routeParams.id];
  });
}]);