var express = require('express'),
	glob = require('glob'),
	favicon = require('serve-favicon'),
	flash = require('connect-flash'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	compress = require('compression'),
	methodOverride = require('method-override'),
	exphbs = require('express-handlebars'),
	Handlebars = require('handlebars'),
	HandlebarsIntl = require('handlebars-intl'),
	passport = require('passport');

// Helper
HandlebarsIntl.registerWith(Handlebars);
require('../app/views/helper');

module.exports = function (app, config) {
	var env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	app.engine('handlebars', exphbs({
		layoutsDir: config.root + '/app/views/layouts/',
		defaultLayout: 'main',
		partialsDir: [config.root + '/app/views/partials/']
	}));

	app.set('views', config.root + '/app/views');
	app.set('view engine', 'handlebars');

	//app.use(favicon(config.root + '/public/img/favicon/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	//app.use(express.session({secret: 'keyboard cat'}));
	//app.use(passport.initialize());
	//app.use(passport.session());
	app.use(cookieParser());
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(methodOverride());

	var controllers = glob.sync(config.root + '/app/controllers/*.js');
	controllers.forEach(function (controller) {
		require(controller)(app);
	});

	app.use(function (req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	if (app.get('env') === 'development') {
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
