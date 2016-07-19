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

var Strategy = require('passport-local').Strategy;

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
	function (username, password, cb) {
		console.log(username, email, password)
	}));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
	cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
	db.users.findById(id, function (err, user) {
		if (err) {
			return cb(err);
		}
		cb(null, user);
	});
});



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
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}));

	// Initialize Passport and restore authentication state, if any, from the
	// session.
	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

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
