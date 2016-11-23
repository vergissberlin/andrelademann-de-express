/**
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

var
	Handlebars = require('handlebars');

Handlebars.registerHelper('datetime', function (dateTime) {
	var
		date = new Date(dateTime);
	if (!dateTime) {
		return;
	}

	return date.toISOString();
});
