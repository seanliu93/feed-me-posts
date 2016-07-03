app.controller('ProfileController', ProfileController);

function ProfileController(PostService, UserService, Auth) {
  var ctrl = this;
  // get current user
  Auth.currentUser().then(function(user) {
    ctrl.user = user;
    UserService.getUser(ctrl.user.id).then(function(resp) {
      ctrl.user = resp.data
      for (var i = 0; i < ctrl.user.posts.length; i++) {
        // format the time, strip off the part of the string after 'T'
        ctrl.user.posts[i].time = ctrl.user.posts[i].created_at.split('T')[0]
      }
    })

  });


  ctrl.deletePost = function(id) {
    console.log('DELETING THIS POST with id' + id)
    PostService.destroyPost(id).then(function(resp) {
      console.log('SUCCESS');
      console.log(resp.data);
      ctrl.user = resp.data;
      for (var i = 0; i < ctrl.user.posts.length; i++) {
      // format the time, strip off the part of the string after 'T'
      ctrl.user.posts[i].time = ctrl.user.posts[i].created_at.split('T')[0]
    }
    })
  };


}
