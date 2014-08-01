'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:AuthorCtrl
* @description
* # AuthorCtrl
* Controller to fetch and manage authors
*/
angular.module('Author.controller', [])
    .controller('AuthorCtrl', ['GetAuthorService', '$scope', '$routeParams', '$location',
        function (GetAuthorService, $scope, $routeParams, $location) {
            GetAuthorService.getAuthor({
                authorid: $routeParams['authorid']
            }).then(
                function(success) {
                    $scope.author = success;
                }, function(error) {
                    $scope.author = "Error";
                }
            );
        }
    ]);