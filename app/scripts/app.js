'use strict';

/**
 * @ngdoc overview
 * @name bongularApp
 * @description
 * # bongularApp
 *
 * Main module of the application.
 */
angular
  .module('bongularApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
