'use strict';
var Handlebars = require('handlebars');

Handlebars.registerHelper('crop', function (context, options) {
	var limit = parseInt(options.hash.limit);
	if (!context) {
		return;
	}
	if (context.length < limit) {
		return new Handlebars.SafeString(context);
	}
	limit = limit ? limit : 150;
	return new Handlebars.SafeString((context.match(new RegExp('.{' + limit + '}\\S*')) || [context])[0] + ' …');
});
