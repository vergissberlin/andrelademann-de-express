/**
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

var Handlebars = require('handlebars');

Handlebars.registerHelper('age', function (from, options) {
	var now = new Date(),
			to  = options.hash.to ? new Date(options.hash.to, now.getMonth(), now.getDate()) : new Date();

	from = new Date(from, now.getMonth(), now.getDate());
	if (!from) {
		return;
	}
	var diff = to.getTime() - from.getTime();
	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
});
