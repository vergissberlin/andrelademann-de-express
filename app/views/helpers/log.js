/*eslint no-console: "off" */
/**
 * Debug logger view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 * @see           @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
 * @example
 *  {{log}} or {{log someValue}}
 */
var
	Handlebars = require('handlebars');

/*
 * Use this to turn on logging: (in your local extensions file)
 */
Handlebars.logger.log = function (level) {
	if (level >= Handlebars.logger.level) {
		console.log.apply(console, [].concat(['Handlebars: '], _.toArray(arguments)));
	}
};

// DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3,
Handlebars.registerHelper('log', Handlebars.logger.log);
// Std level is 3, when set to 0, handlebars will log all compilation results
Handlebars.logger.level = 3;

