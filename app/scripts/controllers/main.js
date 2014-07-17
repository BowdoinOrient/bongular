'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the bongularApp
*/
angular.module('bongular').controller('MainCtrl', function ($scope, Restangular) {
    $scope.awesomeThings = [
        'Bowdoin',
        'the Orient',
        'having the best goddamn college newspaper website in the US'
    ];
});
