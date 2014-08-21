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

            $scope.commentDateFormat = function(str){
                return moment().calendar(str);
            };

            $scope.titleclean = function(str){
                if(str){
                    return str.split("— The Bowdoin Orient").slice(0)[0];
                }
            };

            $scope.linkclean = function(str){
                if(str){
                    return str.split(".com").slice(1)[0];
                }
            };
        }
    ]);