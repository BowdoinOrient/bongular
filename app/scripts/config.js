angular.module('Config', [])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://bowdoinorient.bjacobel.com/api/v1');
    });