'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller for the site's homepage
*/
angular.module('Home', [])
    .controller('HomeCtrl', function ($scope) {
        $scope.something = "something else";
    });