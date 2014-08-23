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
    ])
    .controller('HomeCtrl', ['LocationService', 'IssueService', 'ArticleService', '$scope',
        function (LocationService, IssueService, ArticleService, $scope) {
            IssueService.getLatestIssue(function(data){
                $scope.thisIssue = data;
            });

            // @TODO: Get these ids off the server
            $scope.sections = [
                {
                    name: "News",
                    id:1,
                    posts: []
                },
                {
                    name: "Features",
                    id:2,
                    posts: []
                },
                {
                    name: "Arts and Entertainment",
                    id:3,
                    posts: []
                },
                {
                    name: "Opinion",
                    id:4,
                    posts: []
                },
                {
                    name: "Sports",
                    id:5,
                    posts: []
                }
            ];

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

            for(var i = 1; i <= $scope.sections.length; i++){
                ArticleService.getArticlesInSection(i, 5, function(data){
                    $scope.sections[data[0].section.id-1].posts = data;
                });
            }

            ArticleService.getPopularArticles(function(data){
                $scope.popular = data;
            });
        }
    ]);