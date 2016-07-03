var app = angular.module('app', ['ui.router', 'ngResource', 'templates', 'Devise']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginController as ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home.posts')
        });
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'register.html',
      controller: 'LoginController as ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home.posts')
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
      controller: 'HomeController as ctrl'
    })
    .state('home.posts', {
      url: '/posts',
      parent: 'home',
      templateUrl: 'posts/index.html',
      controller: 'PostsController as ctrl'
    })
    .state('home.new_post', {
      url: '/new_post',
      parent: 'home',
      templateUrl: 'posts/new.html',
      controller: 'NewPostController as ctrl'
    })
    .state('home.show_post', {
      url: '/show_post/:id',
      parent: 'home',
      templateUrl: 'posts/show.html',
      controller: 'ShowPostController as ctrl'
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