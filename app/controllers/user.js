var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function (app) {
	app.use('/', router);
};

router.get('/user', function (req, res) {
	res.render('user', {
		title: 'User',
		message: 'Test flash'
	})
	;
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
