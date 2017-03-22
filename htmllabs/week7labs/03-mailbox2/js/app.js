//... Create your module
var MailboxApp = angular.module('MailboxApp',['ngRoute']);

MailboxApp.config(function($routeProvider){
    $routeProvider
        .when('/inbox',{
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/inbox/:id',{
            controller: 'EmailController',
            templateUrl: 'views/email.html'
        })
        .otherwise({
            redirectTo: '/inbox'});
})