'use strict';

/**
* @ngdoc function
* @name bongularApp.service:ArticleServices
* @description
* # ArticleServices
* Services to interact with the bongo article api
*/
angular.module('Article.services', [])
    .factory('ArticleService', ['Restangular', '$q',
        function ArticleService(Restangular, $q) {
            var getFBStats = function(article){
                var deferred = $q.defer();

                var restng = Restangular.withConfig(function(RestangularConfigurer) {
                    RestangularConfigurer.setBaseUrl("http://api.facebook.com");
                });

                var url = "http://bowdoinorient.com/article/"+article;

                restng.one('restserver.php').get({"method":"links.getStats", "format":"json", "urls":url}).then(function(data){
                    deferred.resolve(data.plain()[0].total_count);
                }).catch(function(error){
                    deferred.reject(error);
                    console.error(error);
                });

                return deferred.promise;
            };

            var getTWStats = function(article){
                var deferred = $q.defer();

                // This API is undocumented and apt to break/be removed at any time
                // See here: https://dev.twitter.com/discussions/5653
                // Also you have to use jsonp which is fun
                var restng = Restangular.withConfig(function(RestangularConfigurer) {
                    RestangularConfigurer.setBaseUrl("https://cdn.api.twitter.com/1/urls/");
                    RestangularConfigurer.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
                    RestangularConfigurer.setJsonp(true);
                });

                var url = "http://bowdoinorient.com/article/"+article;

                restng.one('count.json').get({"url":url}).then(function(data){
                    deferred.resolve(data.plain().count);
                }).catch(function(error){
                    deferred.reject(error);
                    console.error(error);
                });

                return deferred.promise;
            };

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
                },
                getPopularArticles: function(){
                    var deferred = $q.defer();

                    Restangular.all('post').get('',{"limit":10,"ordering":"-published,social"}).then(
                        function(data){
                            deferred.resolve(data);
                        },
                        function(error){
                            deferred.reject(error);
                        }
                    );

                    return deferred.promise;
                },
                getTWStats: function(){
                    var deferred = $q.defer();
                    getTWStats.then(function(data){
                        deferred.resolve(data);
                    })
                    return deferred.promise;
                },
                getFBStats: function(){
                    var deferred = $q.defer();
                    getFBStats.then(function(data){
                        deferred.resolve(data);
                    })
                    return deferred.promise;
                },
                rankArticle: function(){
                    var deferred = $q.defer();
                    rankArticle.then(function(data){
                        deferred.resolve(data);
                    })
                    return deferred.promise;
                }
            };
        }
    ]);