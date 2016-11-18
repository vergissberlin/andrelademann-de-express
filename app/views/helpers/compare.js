/**
 * Compare view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 * @example
 *  {{#compare "Test" "Test"}}
 *  Default comparison of "==="
 *  {{/compare}}
 *
 *  {{#compare Database.Tables.Count ">" 5}}
 *  There are more than 5 tables
 *  {{/compare}}
 */
'use strict';

var Handlebars = require('handlebars');
Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

	var operators, result;

	if (arguments.length < 3) {
		throw new Error('Handlerbars Helper "compare" needs 2 parameters');
	}

	if (options === undefined) {
		options  = rvalue;
		rvalue   = operator;
		operator = '===';
	}

	operators = {
		'===':    function (l, r) {
			return l === r;
		},
		'!==':    function (l, r) {
			return l !== r;
		},
		'<':      function (l, r) {
			return l < r;
		},
		'>':      function (l, r) {
			return l > r;
		},
		'<=':     function (l, r) {
			return l <= r;
		},
		'>=':     function (l, r) {
			return l >= r;
		},
		'typeof': function (l, r) {
			return typeof l === r;
		}
	};

	if (!operators[operator]) {
		throw new Error('Handlerbars Helper "compare" does not know the operator ' + operator);
	}

	result = operators[operator](lvalue, rvalue);

	if (result) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}

});
