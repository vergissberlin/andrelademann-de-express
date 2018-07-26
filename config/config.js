/**
 * Configuration
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      http://opensource.org/licenses/MIT
 */
'use strict';
var path     = require('path'),
		rootPath = path.normalize(__dirname + '/..'),
		fs       = require('fs'),
		env      = process.env.NODE_ENV || 'development';

var config = {
	home:        {
		root:   rootPath,
		app:    {
			name: 'andrelademannde'
		},
		aws:    {
			id:     process.env.AWS_ACCESS_KEY_ID,
			secret: process.env.AWS_SECRET_ACCESS_KEY,
			bucket: process.env.S3_BUCKET
		},
		media:  {
			cdn:    'http://development-cdn.andrelademann.de/',
			images: 'http://edge.zimage.io/?url=http://development-cdn.andrelademann.de/'
		},
		styles: {
			inlineStyles: fs.readFileSync(rootPath + '/public/css/critical.css'),
			remoteStyles: [
				'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
				'/css/screen.css'
			]
		},
		url:    process.env.URL || 'https://localhost',
		port:   process.env.PORT || 3030,
		db:     process.env.MONGODB_URI || 'mongodb://localhost:27017/andrelademannde-home'
	},
	development: {
		root:   rootPath,
		app:    {
			name: 'andrelademannde'
		},
		aws:    {
			id:     process.env.AWS_ACCESS_KEY_ID,
			secret: process.env.AWS_SECRET_ACCESS_KEY,
			bucket: process.env.S3_BUCKET
		},
		media:  {
			cdn:    'https://development-cdn.andrelademann.de/',
			images: 'https://zimage.global.ssl.fastly.net/?url=http://development-cdn.andrelademann.de/'
		},
		styles: {
			inlineStyles: fs.readFileSync(rootPath + '/public/css/critical.css'),
			remoteStyles: [
				'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
				'/css/screen.css'
			]
		},
		url:    process.env.URL || 'https://localhost',
		port:   process.env.PORT || 3232,
		db:     process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/andrelademannde-development'
	},
	staging:     {
		root:   rootPath,
		app:    {
			name: 'andrelademannde'
		},
		aws:    {
			id:     process.env.AWS_ACCESS_KEY_ID,
			secret: process.env.AWS_SECRET_ACCESS_KEY,
			bucket: process.env.S3_BUCKET
		},
		media:  {
			cdn:    'https://staging-cdn.andrelademann.de/',
			images: 'https://zimage.global.ssl.fastly.net/?url=http://staging-cdn.andrelademann.de/'
		},
		styles: {
			inlineStyles: fs.readFileSync(rootPath + '/public/css/critical.min.css'),
			remoteStyles: [
				'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
				'/css/screen.min.css'
			]
		},
		url:    process.env.URL || 'https://staging.andrelademann.de',
		port:   process.env.PORT || 443,
		db:     process.env.MONGODB_URI || 'mongodb://localhost/andrelademannde-staging'
	},

	production: {
		root:   rootPath,
		app:    {
			name: 'andrelademannde'
		},
		aws:    {
			id:     process.env.AWS_ACCESS_KEY_ID,
			secret: process.env.AWS_SECRET_ACCESS_KEY,
			bucket: process.env.S3_BUCKET
		},
		media:  {
			cdn:    'https://cdn.andrelademann.de/',
			images: 'https://zimage.global.ssl.fastly.net/?url=http://cdn.andrelademann.de/'
		},
		styles: {
			inlineStyles: fs.readFileSync(rootPath + '/public/css/critical.min.css'),
			remoteStyles: [
				'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
				'/css/screen.min.css'
			]
		},
		url:    process.env.URL || 'https://andrelademann.de',
		port:   process.env.PORT || 443,
		db:     process.env.MONGODB_URI
	}
};

module.exports = config[env];
