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
    .state('logout', {
      url: '/logout',
      controller: function($state, Auth) {
        Auth.logout().then(function(oldUser) {
          $state.go('login');
        });
      },
      data: {
        requireLogin: false,
      }
    })
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController as ctrl',
      resolve: {
        posts: function (PostService) {
          return PostService.getAllPosts();
        }
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'profile.html',
      controller: 'ProfileController as ctrl'
    })

    $urlRouterProvider.otherwise('login');
});

app.run(function ($rootScope, $state) {
    $rootScope.navbar = false;
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (toState.name === 'login' || toState.name === 'register') {//toState variable see the state you're going 
            $rootScope.navbar = false;
        } else {
            $rootScope.navbar = true;
        }
    });
});