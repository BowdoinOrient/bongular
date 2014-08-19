'use strict';

/**
* @ngdoc function
* @name bongularApp.service:ArticleServices
* @description
* # ArticleServices
* Services to interact with the bongo article api
*/
angular.module('Article.services', [])
    .factory('ArticleService', ['Restangular',
        function ArticleService(Restangular) {
            return {
                getArticle: function(params, callback){
                    Restangular.one('post', params.articleid).get().then(function(data){
                        callback(data);
                    });
                }
            };
        }
    ]);