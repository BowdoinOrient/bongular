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
                },
                getPopularArticles: function(callback){
                    var fb_interactions = 0;
                    this.getFBStats(9001, function(data){
                        fb_interactions = data;
                    });

                    var tw_interactions = 0;
                    this.getTWStats(9001, function(data){
                        tw_interactions = data;
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
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://cdn.api.twitter.com/1/urls/");
                        RestangularConfigurer.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
                        RestangularConfigurer.setJsonp(true);
                    });

                    var url = "http://bowdoinorient.com/article/"+article;

                    restng.one('count.json').get({"url":url}).then(function(data){
                        callback(data);
                    });
                }
            };
        }
    ]);