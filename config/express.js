var
	express = require('express'),
	flash = require('connect-flash'),
	session = require('express-session'),
	expressHandlebars = require('express-handlebars'),
	handlebars = require('handlebars'),
	handlebarsIntl = require('handlebars-intl'),
	glob = require('glob'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	compress = require('compression'),
	methodOverride = require('method-override'),
	passport = require('passport'),
	sessionStore = new session.MemoryStore;

var secret = process.env.NODE_SECRET || '1234';

// Helper
handlebarsIntl.registerWith(handlebars);
require('../app/views/helper');

module.exports = function (app, config) {
	var env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	// Rendering
	app.engine('handlebars', expressHandlebars({
		layoutsDir: config.root + '/app/views/layouts/',
		defaultLayout: 'main',
		partialsDir: [config.root + '/app/views/partials/']
	}));

	// Views
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'handlebars');

	app.use(favicon(config.root + '/public/img/favicon/favicon.ico'));
	app.use(logger('dev'));


	// Parser
	app.use(cookieParser(secret));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));


	// Session handling
	app.use(session({
		cookie: {maxAge: 60000},
		store: sessionStore,
		saveUninitialized: true,
		resave: 'true',
		secret: secret
	}));


	// Passport
	app.use(passport.initialize());
	app.use(passport.session());


	// Compression and caching
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(methodOverride());


	// Flash messages
	app.use(flash());
	/// Custom flash middleware
	app.use(function (req, res, next) {
		// if there's a flash message in the session request,
		// make it available in the response, then delete it
		res.locals.flash = req.session.flash;
		delete req.session.flash;
		next();
	});


	// Controllers
	var controllers = glob.sync(config.root + '/app/controllers/*.js');
	controllers.forEach(function (controller) {
		require(controller)(app);
	});


	// Exception handling
	app.use(function (req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		res.render('error', {
			message: err.message,
			error: err,
			env: app.get('env'),
			title: 'Page not found.'
		});
	});

	if (app.get('env') === 'development' || app.get('env') === 'home') {
		app.use(function (err, req, res) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err,
				title: 'error'
			});
		});
	}

	app.use(function (err, req, res) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {},
			title: 'error'
		});
	});
};
