'use strict';

/**
* @ngdoc function
* @name bongularApp.service:AuthorServices
* @description
* # AuthorServices
* Services to interact with the bongo author api
*/
angular.module('Author.services', [])
    .factory('AuthorService', ['Restangular',
        function AuthorService(Restangular) {
            return {
                getAuthor: function(params, callback){
                    Restangular.one('creator', params.authorid).get().then(function(data){
                        callback(data);
                    });
                }
            };
        }
    ]);