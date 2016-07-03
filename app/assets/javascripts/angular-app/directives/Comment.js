function Comment() {
  return {
    templateUrl: 'directives/comment.html',
    scope: {},
    restrict: 'E',
    controller: function() {
      var comment = this;
    },
    controllerAs: 'post',
    bindToController: {
      data: '=',
    }
  };
}

angular
    .module('app')
    .directive('comment', Comment);