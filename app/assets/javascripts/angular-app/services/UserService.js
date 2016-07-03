function UserService($http) {
  var ctrl = this;
  ctrl.getUser = function(id) {
    return $http.get('/api/v1/users/' + id)
  }

}

angular
   .module('app')
   .service('UserService', UserService);