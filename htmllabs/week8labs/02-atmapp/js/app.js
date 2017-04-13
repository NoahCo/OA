var AtmApp = angular.module('AtmApp',['ngRoute']);
AtmApp.config(function($routeProvider){
    $routeProvider
            .when('/',{
                controller: 'AccController',
                templateUrl: 'views/acc.html'
            })
            .otherwise({
                redirectTo: '/'
            });
})