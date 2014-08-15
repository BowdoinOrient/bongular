'use strict';

/**
* @ngdoc function
* @name bongularApp.service:ArticleServices
* @description
* # ArticleServices
* Services to interact with the bongo article api
*/
angular.module('Article.services', [])    
    .factory('GetArticleService', ['Restangular',
        function GetArticleService(Restangular) {
            return {
                getArticle: function(params){
                    return Restangular.one('post/'+params.articleid).get();
                }
            };
        }
    ]);