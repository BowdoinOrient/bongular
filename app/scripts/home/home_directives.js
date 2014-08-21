angular.module('Home.directives', [
        'Home.controller',
    ])
    .directive('twitterWidget', function() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'views/components/widgets/twitter-widget.html',
            link: function(){
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");   // jshint ignore:line
            }
        };
    })
    .directive('scribdWidget', ['ScribdService', function(ScribdService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'views/components/widgets/scribd-widget.html',
            link: function(scope, element, attrs){
                attrs.$observe('issue', function(){
                    var issueID = parseInt(attrs.issue, 10);
                    if(issueID > 0) {
                        ScribdService.lastCover(issueID, function(result){
                            scope.scribdImage = result;
                        });
                    }
                });
            }
        };
    }])
    .directive('disqusWidget', ['DisqusService', function(DisqusService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'views/components/widgets/disqus-widget.html',
            link: function(scope){
                DisqusService.recentComments(function(data){
                    var mapFinished = function(arr){
                        scope.disqusComments = arr;
                    };

                    data.map(function(curr, index, array){
                        DisqusService.getThreadInfo(curr.thread, function(response){
                            curr.thread_data = response;
                            array[index] = curr;
                        });
                        mapFinished(array);
                    });
                });
            }
        };
    }]);
