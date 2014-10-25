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

                    var mapRank = function(data){
                        var mapDeferred = $q.defer();

                        data = data.map(function(article){
                            article.rank = article.views_global - ((moment() - moment(article.published)) / Math.pow(10,7.5));
                            return article;
                        });

                        mapDeferred.resolve(data);

                        return mapDeferred.promise;
                    };

                    Restangular.all('post').get('',{"limit":50,"ordering":"-published"}).then(function(data){
                        mapRank(data.plain().body).then(
                            function(mappedResult){
                                var sortedResult = mappedResult.sort(function(a, b){
                                    return b.rank - a.rank;
                                });
                            },
                            function(error){
                                console.error(error);
                            }
                        );

                        deferred.resolve(data.plain());
                    });


                    return deferred.promise;
                },
                getFBStats: function(article){
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
                },
                getTWStats: function(article){
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
                }
            };
        }
    ]);