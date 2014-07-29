angular.module('Routes', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
    
            $routeProvider
            .when('/', {
                templateUrl: 'views/pages/home.html',
                controller: 'HomeCtrl'
            })
            .when('/article/:articleid', {
                templateUrl: 'views//pagesarticle.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                templateUrl: 'views/errors/404.html',
                controller: 'CoreCtrl'
            });
        }
    ]);