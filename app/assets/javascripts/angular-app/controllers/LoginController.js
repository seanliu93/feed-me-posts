app.controller('LoginController', LoginController);

function LoginController($state, Auth) {
  var ctrl = this;
  ctrl.login = function() {
    console.log(ctrl.form)
    if (!(ctrl.user.email.error || ctrl.user.password.error)) {
      Auth.login(ctrl.user).then( function() {
        $state.go('home.posts');
      }, function (error) {
        ctrl.errormsg = "Incorrect login email or password. Please try again."
      });
    }

  };

  ctrl.register = function() {
    Auth.register(ctrl.user).then(function() {
      $state.go('home.posts')
    }, function (error) {
      ctrl.errormsg = "That email has already been registered. Please try a different email."
    });
  }

  ctrl.logout = function() {
    Auth.logout().then(function() {
      $state.go('login')
    })
  }
}
