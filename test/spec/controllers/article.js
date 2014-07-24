'use strict';

describe('Controller: ArticleCtrl', function () {

    // load the controller's module
    beforeEach(module('Article.controller'));

    var ArticleCtrl,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ArticleCtrl = $controller('ArticleCtrl', {
            $scope: scope
        });
    }));

    it('returns 404 for an article with no articleid parameter', function () {
        expect(scope.article).not.toBeDefined;
    });
});
