'use strict';

/**
 * @ngdoc function
 * @name bongularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bongularApp
 */
angular.module('bongularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
