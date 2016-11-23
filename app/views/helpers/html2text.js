/**
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

var
	Handlebars = require('handlebars');

Handlebars.registerHelper('html2text', function (string) {
	if (!string) {
		return;
	}

	return string.replace(/((&lt)|(<)(?:.|\n)*?(&gt)|(>))/gm, '');
});
