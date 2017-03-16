(function() {
    "use strict";

    angular.module("app").controller("studentsCtrl", function($scope, $http) {

      var studentId = 1;

        $scope.setup = function() {
            $http.get("http://localhost:3001/api/students.json").then(function(response){
              $scope.students = response.data;
            });
            $http.get("http://localhost:3001/api/students/"+ studentId +".json").then(function(response){
              $scope.student = response.data;
              $scope.educations = $scope.student.educations;
              $scope.experiences = $scope.student.experiences;
              $scope.capstones = $scope.student.capstones;
              $scope.skills = $scope.student.skills;
            });

            console.log(studentId);


            // $http({
            //     method: 'GET',
            //     url: 'http://localhost:3001/api/students.json'
            // }).then(function successCallback(response) {
            //     $scope.students = response.data;
            // }, function errorCallback(response) {
            //     console.log(response);
            // });

        };

        $scope.getId = function(id){
          studentId = id;
          console.log(studentId);
        };
        



        $scope.message = "hello world";

        window.$scope = $scope;
    });
}());
