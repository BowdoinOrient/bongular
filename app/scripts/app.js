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
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngTouch',
    'restangular',

    'bongular.routes'
]);
