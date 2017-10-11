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
	basicAuth         = require('basicauth-middleware'),
	bodyParser        = require('body-parser'),
	bugsnag           = require('bugsnag'),
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
	helpers           = require('../app/views/helpers'),
	i18n              = require('./i18n'),
	logger            = require('morgan'),
	methodOverride    = require('method-override'),
	minifyHTML        = require('express-minify-html'),
	nodeSecret        = process.env.NODE_SECRET || 'superhero',
	passport          = require('passport'),
	session           = require('express-session');

// Register additional header
bugsnag.register(process.env.BUGSNAG_TOKEN);
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
	app.locals.ENV_DEVELOPMENT = env === 'development' || env === 'home';

	// Staging & production
	if (app.get('env') === 'staging' || app.get('env') === 'production') {

		// Minify HTML output
		app.use(minifyHTML({
			override:     true,
			exception_url: false,
			htmlMinifier: {
				html5:                         true,
				removeComments:                true,
				collapseWhitespace:            true,
				collapseBooleanAttributes:     true,
				removeAttributeQuotes:         true,
				removeEmptyAttributes:         true,
				minifyJS:                      true,
				minifyCSS:                     true,
				removeEmptyElements:           true,
				removeRedundantAttributes:     true,
				removeOptionalTags:            true,
				removeScriptTypeAttributes:    true,
				removeStyleLinkTypeAttributes: true,
				sortAttributes:                true,
				maxLineLength:                 144,
				decodeEntities:                true
			}
		}));

		// Redirect to https
		app.all('*', function(req, res) {
		  console.log('HTTP: ' + req.url);
		  return res.redirect('https://' + req.headers['host'] + req.url);
		});
	}

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
			secret: nodeSecret
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

		// Configuration
		req.config        = config;
		res.locals.config = config;

		// User data
		if (req.user) {
			res.locals.profile = req.user;
		}
		next();
	});

	// Security
	app.use(helmet());

	// Optional basic auth
	if (process.env.BASE_USER && process.env.BASE_SECRET) {
		app.use(basicAuth(process.env.BASE_USER, process.env.BASE_SECRET, 'Please enter the credentials!'));
	}

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

	// Development
	if (app.get('env') === 'development' || app.get('env') === 'home') {
		app.use(bugsnag.requestHandler);
		app.use(bugsnag.errorHandler);
		app.use(function (err, req, res) {
			res.status(err.status || 500);

			bugsnag.notify(new Error('404 Not found'),
				{
					message: err.message,
					error:   err,
					env:     app.get('env')
				});

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
