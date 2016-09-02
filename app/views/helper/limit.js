/**
 * Limit view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var Handlebars = require('handlebars');

// limit an array to a maximum of elements (from the start)
Handlebars.registerHelper('limit', function (arr, limit) {
	return arr.slice(0, limit);
});
