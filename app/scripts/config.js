angular.module('Config', [])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:8000/api/v1');  // todo: change this once bongo is running on a server somewhere
    });