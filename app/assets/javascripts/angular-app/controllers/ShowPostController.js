app.controller('ShowPostController', ShowPostController);

function ShowPostController(PostService, CommentService, $stateParams, Auth) {
  var ctrl = this;
  // get current user
  Auth.currentUser().then(function(user) {
    ctrl.user = user;
  });
  // get post
  PostService.getPost($stateParams.id).then(function(resp) {
    ctrl.post = resp.data;
    // format the time
    ctrl.post.time = resp.data.created_at.split('T')[0]
  });



  ctrl.createComment = function(commentForm) {
    if (commentForm.$valid) {
      ctrl.comment.user_id = ctrl.user.id;
      ctrl.comment.post_id = ctrl.post.id;
      CommentService.createComment(ctrl.comment).then(function(resp) {
        ctrl.comment.content = ""
        ctrl.notification = "Comment submitted!"
        // refresh post data
        PostService.getPost($stateParams.id).then(function(resp) {
          ctrl.post = resp.data;
        });
      });
    }
  }
  

}
