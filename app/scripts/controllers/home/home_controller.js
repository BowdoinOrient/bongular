'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller for the site's homepage
*/
angular.module('Home.controller', ['Core.services'])
    .controller('HomeCtrl', ['$scope', 'CoreServices',
        function ($scope, CoreServices) {
            $scope.showMenu = 0;

            $scope.toggleMenu = function(){
                console.log("yo");
                CoreServices.toggleMenu();
            };
        }
    ]);