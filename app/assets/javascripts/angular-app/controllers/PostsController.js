app.controller('PostsController', PostsController);

function PostsController(PostService, Auth) {
  var ctrl = this;

  // get current user
  ctrl.getUser = Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  ctrl.getUser;

  PostService.getAllPosts().then(function(resp) {
    ctrl.posts = resp.data
  })

}
