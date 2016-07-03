function PostService($http) {
  var ctrl = this;
  ctrl.getAllPosts = function() {
   return $http.get('/api/v1/posts');
  };

  ctrl.createPost = function(post_json) {
    return $http.post('/api/v1/posts', post_json)
  }

  ctrl.getPost = function(id) {
    return $http.get('/api/v1/posts/' + id)
  }

}

angular
   .module('app')
   .service('PostService', PostService);