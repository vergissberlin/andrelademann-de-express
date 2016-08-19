/**
 * User Model
 * =============
 */
module.exports = {
	user: [

		{
			_id: 0,
			username: 'vergissberlin',
			firstname: 'André',
			lastname: 'Lademann',
			password: process.env.AUTH_SECRET || 'iPhone',
			gender: 'Herr',
			email: 'vergissberlin@googlemail.com'
		}
	],

	findOneByName: function (username, callback) {
		var user,
			error = null;
		user = this.user.filter(function (user) {
			return user.username == username
		});

		if (user.length === 0) {
			error = username;
		}
		return callback(user[0], error);
	},

	findOneById: function (id, callback) {
		var user,
			error = null;
		user = this.user.filter(function (user) {
			return user._id == id
		});
		if (user.length === 0) {
			error = id;
		}
		return callback(user[0], error);
	}
};
