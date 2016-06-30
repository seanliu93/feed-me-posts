app.controller('LoginController', LoginController);

function LoginController($scope, $state, Auth) {
  var ctrl = this;
  ctrl.login = function() {
    Auth.login(ctrl.user).then( function() {
      $state.go('home');
    }, function (error) {
      ctrl.errormsg = "Incorrect login email or password. Please try again."
    });
  };

  ctrl.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('trailster')
    }, function (error) {
      ctrl.errormsg = "That email has already been registered. Please try a different email."
    });
  }
}
