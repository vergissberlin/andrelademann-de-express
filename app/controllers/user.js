var express      = require('express'),
		passport     = require('passport'),
		passportUtil = require('../../util/passport'),
		user         = require('../models/user'),
		router       = express.Router();

module.exports = function (app) {
	app.use('/', router);
};


// Login
router.get('/user/login', function (req, res) {
	req.session.flash = {
		type:    'info',
		message: 'Please login.'
	};

	res.render('sections/user/login', {
		brand:    'primary',
		title:    'User',
		category: 'User Login'
	});
});

router.post('/user/login', passport.authenticate('local',
	{
		successReturnToOrRedirect: '/user/profile',
		successFlash:              'Welcome. Login successful.',
		failureRedirect:           '/user/login',
		failureFlash:              'Check your credentials!'
	})
);


// Registration
router.get('/user/signup', function (req, res) {
	res.render('sections/user/register', {
		brand:    'primary',
		title:    'Benutzer',
		category: 'Benutzer Registrierung',
		message:  req.flash('message')
	});
});

router.post('/user/signup', passport.authenticate('signup', {
	brand:           'primary',
	title:           'User',
	category:        'User Login',
	successRedirect: '/user/profile',
	failureRedirect: '/user/signup',
	failureFlash:    'Check your credentials.'
}));


// Logout
router.get('/user/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});


// Profile
router.get('/user/profile', passportUtil.ensureAuthenicated, function (req, res) {
	res.render('sections/user/profile', {
		brand:    'primary',
		title:    'Benutzer',
		category: 'Benutzer Profil',
		profile:  req.user
	});
});
