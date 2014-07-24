describe('The angular app', function() {

    beforeEach(function() {
        var ptor = protractor.getInstance();
    });

    it('can get the home page', function() {
        browser.get('/');
    });
});