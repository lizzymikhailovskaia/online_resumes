(function() {
    "use strict";

    angular.module("app").controller("studentsCtrl", function($scope, $http) {

        $scope.setup = function() {
            $http.get("http://localhost:3001/api/students.json").then(function(response){
              $scope.students = response.data;
            });
            $http.get("http://localhost:3001/api/students/1.json").then(function(response){
              $scope.student = response.data;
              $scope.educations = $scope.student.educations;
              $scope.experiences = $scope.student.experiences;
              $scope.capstones = $scope.student.capstones;
              $scope.skills = $scope.student.skills;
            });

            // $http({
            //     method: 'GET',
            //     url: 'http://localhost:3001/api/students.json'
            // }).then(function successCallback(response) {
            //     $scope.students = response.data;
            // }, function errorCallback(response) {
            //     console.log(response);
            // });

        };



        $scope.message = "hello world";

        window.$scope = $scope;
    });
}());
