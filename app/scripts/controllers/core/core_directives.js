angular.module('Core.directives', [])
.directive("scrollmin", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 150) {
                scope.minifyHeader = true;
            } else {
                scope.minifyHeader = false;
            }
            scope.$apply();
        });
    };
});