MailboxApp.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {
  emails.success(function(data) {
    $scope.emails = data[$routeParams.id];
  });
}]);