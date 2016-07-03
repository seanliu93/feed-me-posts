function ProfilePost() {
  return {
    templateUrl: 'directives/profile_post.html',
    scope: {},
    restrict: 'E',
    controller: function() {
      var post = this;
    },
    controllerAs: 'post',
    bindToController: {
      data: '='
    }
  };
}

angular
    .module('app')
    .directive('profilepost', ProfilePost);