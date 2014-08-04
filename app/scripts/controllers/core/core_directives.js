angular.module('Core.directives', [])
.directive("scrollmin", function ($window) {
    return function(scope, element, attrs) {
        checkWidth = function(){
            if (this.innerWidth <= 635) {
                scope.minByWidth = true;
            } else {
                scope.minByWidth = false;
            }
        };

        checkWidth();

        angular.element($window).bind("resize", function(){
            checkWidth();
            scope.$apply();
        });

        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 145) {
                scope.minByScroll = true;
                scope.fallIn = true;
            } else {
                scope.minByScroll = false;
                scope.fallIn = false;
            }
            scope.$apply();
        });


    };
});

