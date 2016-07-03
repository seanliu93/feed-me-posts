app.controller('PostsController', PostsController);

function PostsController(PostService, UserService,  Auth) {
  var ctrl = this;

  // get current user
  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  PostService.getAllPosts().then(function(resp) {
    ctrl.posts = resp.data
    for (var i = 0; i < ctrl.posts.length; i++) {
      // format the time, strip off the part of the string after 'T'
      ctrl.posts[i].time = ctrl.posts[i].created_at.split('T')[0]
    }
  })

}
