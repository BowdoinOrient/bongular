'use strict';

describe('Controller: ArticleCtrl', function () {

    // load the controller's module
    beforeEach(module('Article'));

    var ArticleCtrl,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ArticleCtrl = $controller('ArticleCtrl', {
            $scope: scope
        });
    }));

    it('should attach "something" to the scope', function () {
        expect(scope.something).toBe("something else");
    });
});
