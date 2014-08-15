'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:CoreCtrl
* @description
* # CoreCtrl
* Main controller of the bongularApp
*/
angular.module('Core.controller', [])
    .controller('CoreCtrl', ['LocationService', '$scope', 
        function (LocationService, $scope) {
            $scope.goto = LocationService.goto;
            
            $scope.showMenu = 0;

            $scope.toggleMenu = function(){
                $scope.showMenu = $scope.showMenu * -1 + 1;
            };
        }
    ]);
