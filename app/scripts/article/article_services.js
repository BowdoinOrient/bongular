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
                },
                getArticlesInSection: function(section, limit, callback){
                    // Get the `limit` most recent articles in `section`
                    Restangular.one('section', section).all('posts').getList({"limit":limit,"ordering":"-published"}).then(function(data){
                        callback(data.plain());
                    });
                }
            };
        }
    ]);