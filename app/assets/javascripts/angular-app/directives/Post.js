function Post() {
  return {
    templateUrl: 'directives/post.html',
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
    .directive('post', Post);