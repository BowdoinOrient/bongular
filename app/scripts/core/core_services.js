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
        }]);