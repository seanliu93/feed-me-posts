function Post() {
  return {
    templateUrl: 'directives/post.html',
    scope: {},
    restrict: 'E',
    controller: function() {
      var post = this;
      console.log(post.data.title);
      console.log(post.data.content);
      console.log(post.data.user.email);
    },
    controllerAs: 'post',
    bindToController: {
      data: '='
    }
  };
}

angular
    .module('app')
    .directive('post', Post);