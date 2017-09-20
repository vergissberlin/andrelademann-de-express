var path     = require('path'),
		rootPath = path.normalize(__dirname + '/..'),
		env      = process.env.NODE_ENV || 'development';

var config = {
	development: {
		root: rootPath,
		app:  {
			name: 'andrelademann-new'
		},
		port: process.env.PORT || 3000,
		db:   'mongodb://localhost/andrelademann-new-development'
	},

	test: {
		root: rootPath,
		app:  {
			name: 'andrelademann-new'
		},
		port: process.env.PORT || 3000,
		db:   'mongodb://localhost/andrelademann-new-test'
	},

	production: {
		root: rootPath,
		app:  {
			name: 'andrelademann-new'
		},
		port: process.env.PORT || 3000,
		db:   'mongodb://localhost/andrelademann-new-production'
	}
};

module.exports = config[env];
