'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:ArticleCtrl
* @description
* # ArticleCtrl
* Controller to fetch and manage articles
*/
angular.module('Article', [])
    .controller('ArticleCtrl', function ($scope, $routeParams) {
        $scope.something = "something else";
        $scope.articleid = $routeParams['articleid'];
    });