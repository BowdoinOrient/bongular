angular.module('Config', [])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://bowdoinorient.bjacobel.com/api/v1');  // todo: change this once bongo is running on a server somewhere
    });