/**
 * User Model
 * =============
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	displayName: String,
	emails: [{value: String}],
	password: String
});

UserSchema.virtual('date')
	.get(function () {
		return this._id.getTimestamp();
	});

mongoose.model('User', UserSchema);

UserSchema.pre('save', function (next) {
	this.update({}, {$set: {updated: new Date()}});
	next();
});

exports.findByUsername = function (username, cb) {
	process.nextTick(function () {
		for (var i = 0, len = records.length; i < len; i++) {
			var record = records[i];
			if (record.username === username) {
				return cb(null, record);
			}
		}
		return cb(null, null);
	});
};
