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
                getPopularArticles: function(callback){
                    // Return an article's "popularity": Views weighted with social interactions and staleness
                    var fb = this.getFBStats,
                        tw = this.getTWStats;

                    var mapRank = function(data){
                        var deferred = $q.defer();

                        data = data.map(function(article){
                            var rank = article.views_global - ((moment() - moment(article.published)) / Math.pow(10,9.5));

                            fb(article.id).then(function(num){
                                rank += num * 5;
                                tw(article.id);
                            }).then(function(num){
                                rank += num * 7.5;
                                article.rank = rank;
                                return article;
                            });
                        });

                        deferred.resolve(data);

                        return deferred.promise;
                    }

                    Restangular.all('post').get('',{"limit":50,"ordering":"-published"}).then(function(data){
                        mapRank(data.plain().body).then(function(mappedResult){
                            console.log(mappedResult);
                            sortedResult = mappedResult.sort(function(a, b){
                                return a.rank - b.rank;
                            });
                            callback(data);
                        });
                    });

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