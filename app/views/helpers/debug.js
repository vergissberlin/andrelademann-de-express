/*eslint no-console: "off" */
/**
 * Debug view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 * @see           @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
 * @example
 *  {{debug}} or {{debug someValue}}
 */
var
	Handlebars = require('handlebars');

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
