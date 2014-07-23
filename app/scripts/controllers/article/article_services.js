'use strict';

/**
* @ngdoc function
* @name bongularApp.service:ArticleServices
* @description
* # ArticleServices
* Services to interact with the bongo article api
*/
angular.module('Article.services', [])    
    .factory('GetArticleService', ['Restangular', 'APIROOT',
        function GetArticleService(Restangular, APIROOT) {
            return {
                getArticle: function(articleid){
                    return Restangular.one(APIROOT+'article').get({
                        articleid: articleid
                    });
                }   
            };
        }
    ]);