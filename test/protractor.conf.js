// An example configuration file.
exports.config = {
    // Do not start a Selenium Standalone sever - only run this using chrome.
    chromeOnly: true,
    chromeDriver: '/usr/local/lib/node_modules/protractor/selenium/chromedriver',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    specs: ['./*_spec.js'],

    baseUrl: 'http://127.0.0.1:9000/',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }

};
