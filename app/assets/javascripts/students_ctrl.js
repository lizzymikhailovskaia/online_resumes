(function() {
    "use strict";

    angular.module("app").controller("studentsCtrl", function($scope, $http) {
        // var studentId = 3;
        //
        // $scope.getId = function(id){
        //   studentId = id;
        //   console.log(studentId);
        // };

        $scope.setupIndex = function(studentId) {
            $http.get("http://localhost:3001/api/students.json").then(function(response) {
                $scope.students = response.data;
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

        $scope.setupShow = function(studentId) {
            $http.get("http://localhost:3001/api/students/" + studentId + ".json").then(function(response) {
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

        $scope.toggleOrder = function(attribute) {
            if (attribute != $scope.orderAttribute) {
                $scope.descending = false; //ascending order
            } else {
                $scope.descending = !$scope.descending; //the opposite
            }

            $scope.orderAttribute = attribute; //string 'name'
            $scope.getSortIcon();
        };



        $scope.message = "hello world";

        window.$scope = $scope;
    });
}());
