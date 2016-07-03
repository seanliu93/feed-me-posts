function CommentService($http) {
  var ctrl = this;

  ctrl.createComment = function(comment_json) {
    return $http.post('/api/v1/comments', comment_json);
  };


}

angular
   .module('app')
   .service('CommentService', CommentService);