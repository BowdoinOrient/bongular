'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:AuthorCtrl
* @description
* # AuthorCtrl
* Controller to fetch and manage authors
*/
angular.module('Author.controller', [])
    .controller('AuthorCtrl', ['AuthorService', '$scope', '$routeParams', '$location',
        function (AuthorService, $scope, $routeParams, $location) {
            AuthorService.getAuthor({authorid: $routeParams.authorid}, function(data){
                $scope.author = data;
            });
        }
    ]);