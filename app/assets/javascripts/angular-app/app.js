var app = angular.module('app', ['ui.router', 'ngResource', 'templates', 'Devise']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginController as ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home')
        });
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'register.html',
      controller: 'LoginController as ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home')
        });
      }]
    })
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController as ctrl'
    })

    $urlRouterProvider.otherwise('login');
});