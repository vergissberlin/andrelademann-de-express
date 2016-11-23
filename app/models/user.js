/*eslint indent: "off"*/
/**
 * User Model
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
module.exports = {
	user: [
		{
			_id:       0,
			updatedAt: '2016-10-16T10:00:00',
			createdAt: '2016-06-01T10:00:00',
			username:  'vergissberlin',
			firstname: 'André',
			lastname:  'Lademann',
			password:  process.env.AUTH_SECRET || 'iPhone',
			gender:    'm',
			email:     'info@andrelademann.de'
		}
	],

	findOneByName: function (username, callback) {
		var user,
				error = null;
		user      = this.user.filter(function (user) {
			return user.username === username;
		});

		if (user.length === 0) {
			error = username;
		}
		return callback(user[0], error);
	},

	findOneById: function (id, callback) {
		var user,
				error = null;
		user      = this.user.filter(function (user) {
			return user._id === id;
		});
		if (user.length === 0) {
			error = id;
		}
		return callback(user[0], error);
	}
};
