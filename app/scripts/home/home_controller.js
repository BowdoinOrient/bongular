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
    .controller('HomeCtrl', ['LocationService', 'IssueService', 'ArticleService', 'SectionService', '$scope',
        function (LocationService, IssueService, ArticleService, SectionService, $scope) {
            IssueService.getLatestIssue(function(data){
                $scope.thisIssue = data;
            });

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

            ArticleService.getPopularArticles().then(
                function(data){
                    $scope.popular = data;
                },
                function(error){
                    console.error(error);
                }
            );

            var getSection = function(sectionId){
                ArticleService.getArticlesInSection(sectionId, 5, function(data){
                    $scope.sections[data[0].section.id-1].posts = data;
                });
            };

            SectionService.getSections(function(data){
                $scope.sections = data.body;

                for(var i = 1; i <= $scope.sections.length; i++){
                    getSection(i);
                }
            });
        }
    ]);