app.controller('HomeController', HomeController);

function HomeController(Auth) {
  var ctrl = this;
  // get current user
  ctrl.getUser = Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  ctrl.getUser;
}
