function PostService($http) {
 this.getAllPosts = function() {
   return $http.get('/api/v1/posts.json');
 };
}

angular
   .module('app')
   .service('PostService', PostService);