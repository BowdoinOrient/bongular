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
            $scope.something = "something else";

            $scope.articleid = $routeParams['articleid'];

            GetArticleService.getArticle({
                articleid: $scope.articleid
            }).then(
                function(success) {
                    console.log("success");
                }, function(error) {
                    console.log("error");
                }
            );
        }
    ]);