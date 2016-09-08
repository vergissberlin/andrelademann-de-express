/**
 * Slug view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var express  = require('express'),
		config   = require('./config/config'),
		glob     = require('glob'),
		mongoose = require('mongoose');

mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', function () {
	throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
	require(model);
});
var app = express();

require('./config/express')(app, config);
require('./config/passport')();

app.listen(config.port, function () {
	console.info('Express server listening on port ' + config.port);
});
