var Handlebars = require('handlebars');

// debug helper
// usage: {{debug}} or {{debug someValue}}
// from: @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
Handlebars.registerHelper('debug', function (optionalValue) {
	console.info('\nCurrent Context');
	console.info('====================');
	console.log(this);

	if (optionalValue) {
		console.info('Value');
		console.info('====================');
		console.log(optionalValue);
	}
});
