/**
 * Capitalize view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 * @example
 *  {{{capitalize value}}}
 */
'use strict';
var
	Handlebars = require('handlebars');

Handlebars.registerHelper('capitalize', function (str) {
	var strVal = '';
	str = str.toString().split(' ');
	for (var chr = 0; chr < str.length; chr++) {
		strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
	}
	return strVal;
});
