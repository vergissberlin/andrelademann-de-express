var Handlebars = require('handlebars');

// limit an array to a maximum of elements (from the start)
Handlebars.registerHelper('limit', function (arr, limit) {
    return arr.slice(0, limit);
});
