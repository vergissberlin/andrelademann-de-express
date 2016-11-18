/**
 * Paginate view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var Handlebars = require('handlebars'),
		paginate   = require('handlebars-paginate');

Handlebars.registerHelper('paginate', paginate);
