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
    .controller('HomeCtrl', ['LocationService', 'IssueService', '$scope',
        function (LocationService, IssueService, $scope) {
            IssueService.getLatestIssue(function(data){
                $scope.thisIssue = data;
            });

            $scope.sections = ["News", "Features", "Arts and Entertainment", "Opinion", "Sports"];

            $scope.goto = LocationService.goto;
        }
    ]);