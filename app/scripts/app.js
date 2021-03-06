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
    'Core.services',
    'Article.controller',
    'Article.services',
    'Author.controller',
    'Author.services',
    'Issue.services',
    'Home.controller',
    'Home.directives'
]);
