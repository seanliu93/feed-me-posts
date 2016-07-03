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
    console.log('DONE')
  })

  ctrl.createPost = function(myForm) {
    console.log('HELLO')
    console.log(myForm)
    if (myForm.$valid) {
      console.log(ctrl.user)
      ctrl.post.user_id = ctrl.user.id;
      console.log("USER ID: " + ctrl.user.id)
      console.log(ctrl.post);
      PostService.createPost(ctrl.post).then(function(resp) {
      }, function(error) {
        console.log("ERROR OCCURRED");
      });
    }
  }

}
