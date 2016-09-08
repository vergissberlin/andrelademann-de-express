/**
 * Express configuration
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var
	basicAuth = require('basicauth-middleware'),
	bodyParser        = require('body-parser'),
	compress          = require('compression'),
	cookieParser      = require('cookie-parser'),
	express           = require('express'),
	expressHandlebars = require('express-handlebars'),
	expressSession    = require('express-session'),
	favicon           = require('serve-favicon'),
	flash             = require('connect-flash'),
	glob              = require('glob'),
	handlebars        = require('handlebars'),
	handlebarsIntl    = require('handlebars-intl'),
	helmet            = require('helmet'),
	helpers           = require('../app/views/helper'),
	i18n      = require('./i18n'),
	logger            = require('morgan'),
	methodOverride    = require('method-override'),
	passport          = require('passport'),
	session           = require('express-session');

var secret = process.env.NODE_SECRET || 'superhero';

// Register additional header
handlebarsIntl.registerWith(handlebars);

/**
 * Express configuration
 *
 * @module configuration/express
 */
module.exports = function (app, config) {

	// Environment
	var env                    = process.env.NODE_ENV || 'development';
	app.locals.ENV             = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	// Passport
	app.use(expressSession({
		secret:            'keyboard cat',
		resave:            false,
		saveUninitialized: false,
		cookie:            {secure: false}
	}));
	app.use(passport.initialize());
	app.use(cookieParser());
	app.use(passport.session({
		cookie: {
			maxAge: 60000,
			secret: secret
		}
	}));

	// Rendering
	app.engine('handlebars', expressHandlebars({
		layoutsDir:    config.root + '/app/views/layouts/',
		partialsDir:   [config.root + '/app/views/partials/'],
		defaultLayout: 'main',
		helpers:       helpers
	}));

	// Views
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'handlebars');

	// l18n
	app.use(i18n);

	app.use(favicon(config.root + '/public/img/favicon/favicon.ico'));
	app.use(logger('dev'));

	// Parser
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// Compression and caching
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(express.static('img'));
	app.use(express.static('css'));
	app.use(express.static('fnt'));
	app.use(express.static('js'));

	// Flash messages
	app.use(flash());
	/// Custom flash middleware
	app.use(function (req, res, next) {
		// if there's a flash message in the session request,
		// make it available in the response, then delete it
		res.locals.flash = req.session.flash;
		delete req.session.flash;
		res.locals.messages = req.flash();
		if (req.user) {
			res.locals.profile = req.user;
		}
		next();
	});

	// Security
	app.use(helmet());

	// Basic auth
	app.use(basicAuth('ala', process.env.BASE_SECRET || 'base', 'Please enter the credentials!'));

	// Override
	app.use(methodOverride());

	// Controllers
	var controllers = glob.sync(config.root + '/app/controllers/**/*.js');
	controllers.forEach(function (controller) {
		require(controller)(app);
	});

	// Exception handling
	app.use(function (req, res) {
		var err    = new Error('Not Found');
		err.status = 404;
		res.render('error', {
			message: err.message,
			error:   err,
			env:     app.get('env'),
			title:   'Page not found.'
		});
	});

	if (app.get('env') === 'development' || app.get('env') === 'home') {
		app.use(function (err, req, res) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error:   err,
				title:   'error'
			});
		});
	}

	app.use(function (err, req, res) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error:   {},
			title:   'error'
		});
	});
};
