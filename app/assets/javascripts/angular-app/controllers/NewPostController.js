app.controller('NewPostController', NewPostController);

function NewPostController(PostService, Auth) {
  var ctrl = this;
  // get current user
  ctrl.getUser = Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });

  ctrl.getUser;

  ctrl.createPost = function(myForm) {
    if (myForm.$valid) {
      console.log(ctrl.user)
      ctrl.post.user_id = ctrl.user.id;
      PostService.createPost(ctrl.post).then(function(resp) {
      }, function(error) {
        console.log("ERROR OCCURRED");
      });
    }
  }

}
