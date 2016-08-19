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
	sessionStore = new session.MemoryStore,
	helpers = require('../app/views/helper'),
	basicauth = require('basicauth-middleware');

var secret = process.env.NODE_SECRET || '1234';

// Register additional header
handlebarsIntl.registerWith(handlebars);

// Passport
var passport = require('passport');
var expressSession = require('express-session');

module.exports = function (app, config) {

	// Environment
	var env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	// Passport
	app.use(expressSession({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		cookie: {secure: false}
	}));
	app.use(passport.initialize());
	app.use(cookieParser());
	app.use(passport.session({
		cookie: {maxAge: 60000}
	}));

	// Rendering
	app.engine('handlebars', expressHandlebars({
		layoutsDir: config.root + '/app/views/layouts/',
		partialsDir: [config.root + '/app/views/partials/'],
		defaultLayout: 'main',
		helpers: helpers
	}));

	// Views
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'handlebars');

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

	// Basic auth
	app.use(basicauth('ala', process.env.BASE_SECRET || 'base', 'Please enter the credentials!'));

	// Override
	app.use(methodOverride());

	// Controllers
	var controllers = glob.sync(config.root + '/app/controllers/**/*.js');
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
