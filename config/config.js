/**
 * Configuration
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */
'use strict';
var path     = require('path'),
		rootPath = path.normalize(__dirname + '/..'),
		env      = process.env.NODE_ENV || 'development';

var config = {
	home:        {
		root: rootPath,
		app:  {
			name: 'andrelademannde'
		},
		port: process.env.PORT || 3030,
		db:   'mongodb://localhost:27017/andrelademannde-home'
	},
	development: {
		root: rootPath,
		app:  {
			name: 'andrelademannde'
		},
		port: process.env.PORT || 3232,
		db: 'mongodb://192.168.99.100:32769/andrelademannde-development'
	},
	test:        {
		root: rootPath,
		app:  {
			name: 'andrelademannde'
		},
		port: process.env.PORT || 3000,
		db:   'mongodb://localhost/andrelademannde-test'
	},

	production: {
		root: rootPath,
		app:  {
			name: 'andrelademannde'
		},
		port: process.env.PORT || 3000,
		db:   process.env.MONGODB_URI
	}
};

module.exports = config[env];
