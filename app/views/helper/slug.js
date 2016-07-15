var Handlebars = require('handlebars'),
  getSlug = require('speakingurl');

Handlebars.registerHelper('slug', function (context, options) {


  return new Handlebars.SafeString(getSlug(context))
});
