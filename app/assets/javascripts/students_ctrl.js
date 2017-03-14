(function() {
  "use strict";

  angular.module("app").controller("studentsCtrl", function($scope, $http) {

    $scope.setup = function(){
      $http.get("/students.json").then(function(response){
        $scope.students = response.data;
      });
    };

      $scope.message = "hello world";

      window.$scope = $scope;
  });
}());
