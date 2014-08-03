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
    'Config',

    'Core.controller',
    'Core.directives',
    'Article.controller',
    'Article.services',
    'Author.controller',
    'Author.services',
    'Home.controller',
    'Home.directives'
]);
