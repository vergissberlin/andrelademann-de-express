var passport = require('passport'),
	LocalPassport = require('passport-local'),
	User = require('../app/models/user');

module.exports = function () {
	passport.use(new LocalPassport({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: false
	}, function (username, password, done) {
		User.findOneByName(username, function (user, error) {
			if (error) {
				console.error('Error loading user: ' + error);
				return;
			}
			if (user) {
				return done(null, user);
			}
			else {
				return done(null, false, {message: 'Benutzername oder Passwort inkorrekt.'});
			}
		});
	}));

	passport.serializeUser(function (user, done) {
		if (user) {
			return done(null, user._id);
		}
	});

	passport.deserializeUser(function (id, done) {
		User.findOneById(id, function (user, error) {
			if (error) {
				console.error('Error loading user: ' + error);
				return;
			}
			done(error, user);
		});
	});
};
