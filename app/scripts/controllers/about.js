'use strict';

/**
 * @ngdoc function
 * @name bongularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bongularApp
 */
angular.module('bongularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
