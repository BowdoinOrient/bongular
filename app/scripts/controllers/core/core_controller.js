'use strict';

/**
* @ngdoc function
* @name bongularApp.controller:CoreCtrl
* @description
* # CoreCtrl
* Main controller of the bongularApp
*/
angular.module('Core.controller', [])
    .controller('CoreCtrl', ['$scope', 
        function ($scope) {
            $scope.awesomeThings = [
                'Bowdoin',
                'the Orient',
                'having the best goddamn college newspaper website in the US'
            ];
        }
    ]);
