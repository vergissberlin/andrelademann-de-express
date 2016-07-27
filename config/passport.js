var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function (app, config) {
	passport.use(new LocalStrategy(
		function (username, password, done) {
			User.findOne({username: username}, function (err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, {message: 'Incorrect username.'});
				}
				if (!user.validPassword(password)) {
					return done(null, false, {message: 'Incorrect password.'});
				}
				return done(null, user);
			});
		}
	));
}


/*
 var Strategy = require('passport-local').Strategy;

 // Configure the local strategy for use by Passport.
 //
 // The local strategy require a `verify` function which receives the credentials
 // (`username` and `password`) submitted by the user.  The function must verify
 // that the password is correct and then invoke `cb` with a user object, which
 // will be set at `req.user` in route handlers after authentication.
 passport.use(new Strategy(
 function (username, password, cb) {
 console.log(username, email, password);
 return cb(null, user);
 })
 );

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
 ;
 */
