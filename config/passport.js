/**
 * Passport configuration
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var passport      = require('passport'),
		LocalPassport = require('passport-local'),
		User          = require('../app/models/user');

/**
 * Passport configuration
 *
 * @module configuration/passport
 */
module.exports = function () {
	passport.use(new LocalPassport({
		usernameField:     'username',
		passwordField:     'password',
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
			return done(null, false, {
				message: 'Please check your credentials!'
			});
		});
	}));

	passport.serializeUser(function (user, done) {
		if (user) {
			return done(null, user._id);
		}
		return false;
	});

	passport.deserializeUser(function (id, done) {
		User.findOneById(id, function (user, error) {
			if (error) {
				bugsnag.notify(new Error('Error loading user'),
					{
						message: error.message,
						error:   error,
						user:    user,
						env:     app.get('env')
					});

				console.error('Error loading user: ' + error);
				return;
			}
			done(error, user);
		});
	});
	return undefined;
};
