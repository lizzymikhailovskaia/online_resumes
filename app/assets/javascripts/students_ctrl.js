(function() {
  "use strict";

  angular.module("app").controller("studentsCtrl", function($scope) {

      $scope.message = "hello world";

      window.$scope = $scope;
  });
}());
