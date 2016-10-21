// Convert
require('../seleniumConverter');

// Run the test
var wdSync  = require('wd-sync'),
		client  = wdSync.remote('127.0.0.1', 8910),
		browser = client.browser,
		sync    = client.sync;

// Test suite
var blog = {
	testLogin:  require('./blog/login'),
	testCreate: require('./blog/create'),
	testEdit:   require('./blog/edit'),
	testLogout: require('./blog/logout')
};

sync(function () {
	var config = {
		screenshotFolder: 'test/report/screenshots/exceptions/',
		timeout:          5000
	};

	browser.init({browserName: 'phantomjs'});

	blog.testLogin(browser, config);
//	blog.testCreate(browser, config);
//	blog.testEdit(browser, config);
	blog.testLogout(browser, config);

	browser.setWindowSize(1024, 768);
	browser.quit();
});
