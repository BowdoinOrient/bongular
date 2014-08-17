'use strict';

/**
* @ngdoc function
* @name bongularApp.service:IssueServices
* @description
* # IssueServices
* Services to interact with the bongo issue api
*/
angular.module('Issue.services', [])    
    .factory('IssueService', ['Restangular',
        function IssueService(Restangular) {
            return {
                getIssue: function(params, callback){
                    Restangular.one('issue', params.issueid).get().then(function(data){
                        callback(data);
                    });
                },
                getLatestIssue: function(callback){
                    Restangular.one('issue/latest').get().then(function(data){
                        callback(data.plain().body[0]);
                    });
                }
            };
        }
    ]);