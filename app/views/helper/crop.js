var Handlebars = require('handlebars');

Handlebars.registerHelper('crop', function (context, options) {
  var limit = parseInt(options.hash.limit);
  limit = limit ? limit : 150;
  return new Handlebars.SafeString(context.substring(0, limit) + ' …')
});
