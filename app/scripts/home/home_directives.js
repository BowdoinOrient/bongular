angular.module('Home.directives', [
        'Home.controller',
    ])
    .directive('twitterWidget', function() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'views/components/twitter-widget.html',
            link: function(){
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            }
        };
    });
