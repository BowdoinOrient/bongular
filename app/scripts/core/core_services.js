'use strict';

/**
* @ngdoc function
* @name bongularApp.service:CoreServices
* @description
* # CoreServices
* Services to be used generally cross-app
*/
angular.module('Core.services', [])    
    .factory('LocationService', ['$location', '$anchorScroll',  
        function LocationService($location, $anchorScroll) {
            return {
                goto: function(url){
                    if ($location.url() != url){
                        $location.url(url);
                    } else {
                        $anchorScroll();
                        window.setTimeout(function(){
                            window.dispatchEvent(new Event('scroll'));
                        }, 50);
                    }
                },
            }
        }
    ]).factory('ScribdService', ['Restangular',
        function ScribdService(Restangular) {
            return {
                lastCover: function(scribdId, callback){
                    var scribdPublicApiKey = "34m5pzwzt3fqi0fod70cc";
                    var scribdDocId = scribdId;

                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("http://api.scribd.com/");
                    });

                    restng.one('api').get({"method":"thumbnail.get", "api_key":scribdPublicApiKey, "doc_id": scribdDocId}).then(function(thumb){
                        callback(thumb);
                    });
                },
            }
        }
    ]).factory('DisqusService', ['Restangular',
        function DisqusService(Restangular) {
            return {
                recentComments: function(callback){
                    var disqusPublicApiKey = "8BIlGuOMH5jo4jTDI7qKZTvKitxQUesD7cKt3643FfqMfyDKWbsiCU9dnFEgmnDb";

                    // disqus' api isn't even close to REST and it makes using Restangular pretty fucking difficult
                    var restng = Restangular.withConfig(function(RestangularConfigurer) {
                        RestangularConfigurer.setBaseUrl("https://disqus.com/api/3.0/posts");
                    });

                    restng.one('list.json').get({"api_key":disqusPublicApiKey, "forum":"bowdoinorient", "limit":10}).then(function(data){
                        callback(data.plain().response);
                    });
                },
            }
        }
    ]);