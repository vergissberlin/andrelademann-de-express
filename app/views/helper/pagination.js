/**
 * Paginate view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <vergissberlin@googlemail.com>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var Handlebars = require('handlebars'),
		paginate   = require('handlebars-paginate');

Handlebars.registerHelper('paginate', paginate);
