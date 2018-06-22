var
	env      = require('dotenv').config(),
	express  = require('express'),
	config   = require('./config/config'),
	glob     = require('glob'),
	fs       = require('fs'),
	https    = require('https'),
	mongoose = require('mongoose');

/**
 * Slug view helper
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';

mongoose.Promise = global.Promise;
mongoose.connect(config.db);

var sslOptions = {
	key:                fs.readFileSync('./private/server/ssl/localhost.key'),
	cert:               fs.readFileSync('./private/server/ssl/localhost.crt'),
	requestCert:        false,
	rejectUnauthorized: false
};

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


if (process.env.NODE_ENV === 'development') {
	https.createServer(sslOptions, app).listen(config.port, function () {
		console.log('Express server with ssl listen on  ' + config.url + ':' + config.port);
	});
} else {
	app.listen(config.port, function () {
		console.info('Express server listening on ' + config.url + ':' + config.port);
	});
}
