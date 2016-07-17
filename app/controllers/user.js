var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function (app) {
	app.use('/', router);
};

router.get('/user', function (req, res) {
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
		successRedirect: '/',
		failureRedirect: '/user/login',
		failureFlash: true
	})
);
