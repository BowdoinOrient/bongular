'use strict';

/**
* @ngdoc function
* @name bongularApp.service:AuthorServices
* @description
* # AuthorServices
* Services to interact with the bongo author api
*/
angular.module('Author.services', [])    
    .factory('GetAuthorService', ['Restangular',
        function GetAuthorService(Restangular) {
            return {
                getAuthor: function(params){
                    return Restangular.one('creator/'+params.authorid).get();
                }
            };
        }
    ]);