/**
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

var
	Handlebars = require('handlebars'),
	i18n       = require('i18n');

Handlebars.registerHelper('__', function () {
	return i18n.__.apply(this, arguments);
});
