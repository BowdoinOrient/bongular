'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:ArticleCtrl
* @description
* # ArticleCtrl
* Controller to fetch and manage articles
*/
angular.module('Articles', [])
    .controller('ArticleCtrl', function ($scope) {
        $scope.something = "something else";
    });