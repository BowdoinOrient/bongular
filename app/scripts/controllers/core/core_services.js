'use strict';

/**
* @ngdoc function
* @name bongularApp.service:CoreServices
* @description
* # CoreServices
* Core services, implemented everywhere
*/
angular.module('Core.services', [])
    .factory('CoreServices', function() {
        return {
            toggleMenu: function() {
                $scope.showMenu = $scope.showMenu * -1 + 1;
            }
        };
    });
