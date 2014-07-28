// An example configuration file.
exports.config = {
    // Do not start a Selenium Standalone sever - only run this using chrome.
    chromeOnly: true,
    chromeDriver: 'node_modules/protractor/selenium/chromedriver',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'firefox',
    },

    seleniumPort: 4444,

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    specs: ['test/*_spec.js'],

    baseUrl: 'http://127.0.0.1:9001/',

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }
};
