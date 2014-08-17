'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller for the site's homepage
*/
angular.module('Home.controller', [
        'Home.directives',
        'Article.services',
    ])
    .controller('HomeCtrl', ['IssueService', '$scope',
        function (IssueService, $scope) {
            $scope.sections = ["News", "Features", "Arts and Entertainment", "Opinion", "Sports"];
        }
    ]);