'use strict';

/**
* @ngdoc function
* @name bongularApp.service:ArticleServices
* @description
* # ArticleServices
* Services to interact with the bongo article api
*/
angular.module('Article.services', [])    
    .factory('GetArticleService', ['Restangular', function GetArticleService(Restangular) {
        return {
            getArticle: function(articleid){
                return Restagular.one(APIROOT+'article').get({
                    articleid: articleid
                });
            }   
        };
    }]);