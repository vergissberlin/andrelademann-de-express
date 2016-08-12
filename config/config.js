var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {
	home: {
		root: rootPath,
		app: {
			name: 'mongamvchandlebars'
		},
		port: process.env.PORT || 3030,
		db: 'mongodb://localhost:27017/mongamvchandlebars-home'
	},
	development: {
		root: rootPath,
		app: {
			name: 'mongamvchandlebars'
		},
		port: process.env.PORT || 3232,
		db: 'mongodb://192.168.99.100:32774/mongamvchandlebars-development'
	},
	test: {
		root: rootPath,
		app: {
			name: 'mongamvchandlebars'
		},
		port: process.env.PORT || 3000,
		db: 'mongodb://localhost/mongamvchandlebars-test'
	},

	production: {
		root: rootPath,
		app: {
			name: 'mongamvchandlebars'
		},
		port: process.env.PORT || 3000,
		db: 'mongodb://wonder:test@ds039058.mlab.com:39058/heroku_4qxt9dld'
	}
};

module.exports = config[env];
