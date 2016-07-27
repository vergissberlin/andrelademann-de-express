var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	user = {
		_id: 45,
		username: 'dirk',
		nickname: 'molle',
		password: '1234'
	};

module.exports = function (app) {
	app.use('/', router);
};

router.get('/user', function (req, res) {
	req.session.sessionFlash = {
		type: 'info',
		message: 'Please login.'
	};

	res.render('user', {
		title: 'User'
	});
});

router.get('/user/login', function (req, res) {
	res.render('userLogin', {
		title: 'User login'
	});
});

router.post('/user/login',
	passport.authenticate('local', {
		successRedirect: '/user',
		failureRedirect: '/user/login',
		failureFlash: true
	}),
	function (req, res) {
		res.redirect('/');
	});

router.get('/user/logout',
	function (req, res) {
		req.logout();
		res.redirect('/');
	});

router.get('/user/profile',
	require('connect-ensure-login').ensureLoggedIn(),
	function (req, res) {
		res.render('profile', {user: req.user});
	});
