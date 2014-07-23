'use strict';

/**
* @ngdoc overview
* @name bongularApp
* @description
* # bongularApp
*
* Main module of the application.
*/
var bongular = window.bongular = angular.module('bongular', [
    'ngRoute',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'restangular',

    'Routes',
    'Constants',

    'Core',
    'Article',
    'Home'
]);
