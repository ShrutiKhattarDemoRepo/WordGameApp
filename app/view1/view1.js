'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$filter', '$alert', function ($scope, $filter, $alert) {
        console.log('In View1');
        $scope.username = '';
        $scope.login = function () {
            console.log('In login method');
        }
    }]);
