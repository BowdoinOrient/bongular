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
                templateUrl: 'views/pages/article.html',
                controller: 'ArticleCtrl'
            })
            .when('/author/:authorid', {
                templateUrl: 'views/pages/author.html',
                controller: 'AuthorCtrl'
            })
            .otherwise({
                templateUrl: 'views/errors/404.html',
                controller: 'CoreCtrl'
            });
        }
    ]);