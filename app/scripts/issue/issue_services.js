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
                getIssue: function(params){
                    return Restangular.one('post', params.articleid).get();
                },
                getLatestIssue: function(params){
                    
                }
            };
        }
    ]);