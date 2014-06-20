var app = angular.module('site', []);

app.controller('UserController', ['$scope', '$http', function($scope, $http){
  // var site = this;
  // site.users = [];
  $http.get('/undertonebeauty/fair-medium.json').success(function(data){
    $scope.users = data;
    console.log($scope.users);
  })
}]);
