'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:ArticleCtrl
* @description
* # ArticleCtrl
* Controller to fetch and manage articles
*/
angular.module('Article.controller', [])
    .controller('ArticleCtrl', ['GetArticleService', '$scope', '$routeParams',
        function (GetArticleService, $scope, $routeParams) {
            GetArticleService.getArticle({
                articleid: $routeParams['articleid']
            }).then(
                function(success) {
                    $scope.article = success;
                }, function(error) {
                    console.error("Content not found");
                }
            );
        }
    ]);