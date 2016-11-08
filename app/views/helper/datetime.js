/**
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

var Handlebars = require('handlebars');

Handlebars.registerHelper('datetime', function (dateTime) {
	var date = new Date(dateTime);
	if (!dateTime) {
		return;
	}

	return date.getFullYear() + '-' +
		('00' + (date.getMonth() + 1)).slice(-2) + '-' +
		('00' + date.getDate()).slice(-2) + ' ' +
		('00' + date.getHours()).slice(-2) + ':' +
		('00' + date.getMinutes()).slice(-2) + ':' +
		('00' + date.getSeconds()).slice(-2)
});
