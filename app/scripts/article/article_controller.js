'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:ArticleCtrl
* @description
* # ArticleCtrl
* Controller to fetch and manage articles
*/
angular.module('Article.controller', [])
    .controller('ArticleCtrl', ['ArticleService', '$scope', '$routeParams', '$location',
        function (ArticleService, $scope, $routeParams, $location) {
            // Get the article content and deliver it to the scope
            ArticleService.getArticle({articleid: $routeParams.articleid}, function(data){
                $scope.article = data;
            });
        }
    ]);