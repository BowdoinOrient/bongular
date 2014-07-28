// An example configuration file.
exports.config = {

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    specs: ['test/*_spec.js'],

    baseUrl: 'http://127.0.0.1:9001/',

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }
};
