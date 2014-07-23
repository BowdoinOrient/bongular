angular.module('Routes', [])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
    
            $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/article/:articleid', {
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                templateUrl: 'views/404.html',
                controller: 'CoreCtrl'
            });
        }
    ]);