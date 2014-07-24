'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:ArticleCtrl
* @description
* # ArticleCtrl
* Controller to fetch and manage articles
*/
angular.module('Article.controller', [])
    .controller('ArticleCtrl', ['GetArticleService', '$scope', '$routeParams', '$location',
        function (GetArticleService, $scope, $routeParams, $location) {
            GetArticleService.getArticle({
                articleid: $routeParams['articleid']
            }).then(
                function(success) {
                    $scope.article = success;
                }, function(error) {
                    $location.path("/404");
                }
            );
        }
    ]);