var Handlebars = require('handlebars');

Handlebars.registerHelper('crop', function (passedString) {
  var theString = passedString.substring(0, 150);
  return new Handlebars.SafeString(theString)
});
