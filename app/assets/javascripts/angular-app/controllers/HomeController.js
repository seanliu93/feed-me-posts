app.controller('HomeController', HomeController);

function HomeController(posts, Auth) {
  var ctrl = this;
  // get current user
  ctrl.getUser = Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  ctrl.posts = posts.data
}
