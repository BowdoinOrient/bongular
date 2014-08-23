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
                        callback(data.plain()[0]);
                    });
                },
                getPopularArticles: function(callback){
                    // Return an article's "popularity": Views weighted with social interactions and staleness
                    var fb = this.getFBStats,
                        tw = this.getTWStats;

                    var rank = function(article){
                        var rankcal = article.views_global - ((moment() - moment(article.published)) / Math.pow(10,9.5));

                        var fbDone = false,
                            twDone = false;

                        fb(article.id, function(num){
                            rank += num * 5;
                            fbDone = true;
                        });

                        tw(article.id, function(num){
                            rank += num * 7.5;
                            twDone = true;
                        });
                    };

                    Restangular.all('post').get('',{"limit":50,"ordering":"-published"}).then(function(data){
                        data = data.plain().body;

                        data = data.map(function(curr){
                            curr.rank = rank(curr);
                        });

                        data = data.sort(function(a, b){
                            return a.rank - b.rank;
                        });
                        callback(data);
                    });

                },
                getFBStats: function(article, callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("http://api.facebook.com");
                    });

                    var url = "http://bowdoinorient.com/article/"+article;

                    restng.one('restserver.php').get({"method":"links.getStats", "format":"json", "urls":url}).then(function(data){
                        callback(data.plain()[0].total_count);
                    });
                },
                getTWStats: function(article, callback){
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
                        callback(data.plain().count);
                    });
                }
            };
        }
    ]);