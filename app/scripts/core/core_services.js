'use strict';

/**
* @ngdoc function
* @name bongularApp.service:CoreServices
* @description
* # CoreServices
* Services to be used generally cross-app
*/

var scribdPublicApiKey = "34m5pzwzt3fqi0fod70cc";

angular.module('Core.services', [])
    .factory('LocationService', ['$location', '$anchorScroll',
        function LocationService($location, $anchorScroll) {
            return {
                goto: function(url){
                    if ($location.url() !== url){
                        $location.url(url);
                    } else {
                        $anchorScroll();
                        window.setTimeout(function(){
                            window.dispatchEvent(new Event('scroll'));
                        }, 50);
                    }
                },
            };
        }
    ]).factory('ScribdService', ['Restangular',
        function ScribdService(Restangular) {
            return {
                lastCover: function(scribdId, callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("http://api.scribd.com/");
                    });

                    restng.one('api').get({"method":"thumbnail.get", "api_key":scribdPublicApiKey, "doc_id": scribdId, "format": "json"}).then(function(data){
                        console.log(data);
                    });
                },
            };
        }
    ]).factory('DisqusService', ['Restangular',
        function DisqusService(Restangular) {
            return {
                commentCount: function(threadId, callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://disqus.com/api/3.0/posts");
                    });

                    restng.one('list.json').get({"api_key":disqusPublicApiKey, "forum":"bowdoinorient", "limit":100, "thread":threadId}).then(function(data){
                        var len = data.plain().response.length;
                        if (data.plain().cursor.hasNext) {
                            len += "+";
                        }
                        callback(len);
                    });
                },
                convertThreadIdToArticleId: function(threadId, callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://disqus.com/api/3.0/threads");
                    });

                    restng.one('details.json').get({"api_key":disqusPublicApiKey, "forum":"bowdoinorient", "thread":threadId}).then(function(data){
                        callback(data.plain().response.link.split("/").slice(-1));
                    });
                },
                convertArticleIdToThreadId: function(articleId, callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://disqus.com/api/3.0/threads");
                    });

                    var link = "http://bowdoinorient.com/article/"+articleId;

                    restng.one('details.json').get({"api_key":disqusPublicApiKey, "forum":"bowdoinorient", "link":link}).then(function(data){
                        callback(data.plain().response.id);
                    });
                },
                getThreadInfo: function(threadId, callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://disqus.com/api/3.0/threads");
                    });

                    restng.one('details.json').get({"api_key":disqusPublicApiKey, "forum":"bowdoinorient", "thread":threadId}).then(function(data){
                        callback(data.plain().response);
                    });
                },
                recentComments: function(callback){
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://disqus.com/api/3.0/posts");
                    });

                    restng.one('list.json').get({"api_key":disqusPublicApiKey, "forum":"bowdoinorient", "limit":8}).then(function(data){
                        callback(data.plain().response);
                    });
                }
            };
        }
    ]).factory('SectionService', ['Restangular',
        function SectionService(Restangular) {
            return {
                getSections: function(callback){
                    Restangular.one('section').get().then(function(data){
                        callback(data);
                    });
                }
            };
        }
    ]);