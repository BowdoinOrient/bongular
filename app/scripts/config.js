angular.module('Config', [])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:8000/api/v1');
    })
    .config(function($logProvider){
        $logProvider.debugEnabled(true);
    });