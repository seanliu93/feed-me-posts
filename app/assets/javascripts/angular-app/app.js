var app = angular.module('app', ['ui.router', 'ngResource', 'templates']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'login.html',
      controller: 'LoginController as ctrl'
    });

    $urlRouterProvider.otherwise('/');
});