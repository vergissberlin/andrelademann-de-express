/**
 * Grunt task configuration
 *
 * JavaScript ECMAScript 5.1
 *
 * @category  JavaScript
 * @package   AndreLademann\AndreLademannDe\Development
 * @project   AndreLademannDe
 * @author    André Lademann <info@andrelademann.de>
 * @copyright MIT
 * @license   https://opensource.org/licenses/MIT
 * @link      https://www.gnu.org/licenses/gpl.html
 */
'use strict';

module.exports = {

	configurations: {
		files: [
			'Gruntfile.js'
		],
		tasks: [
			'dev'
		]
	},

	images: {
		files: [
			'<%= package.directories.private.img %>/**/*'
		],
		tasks: [
			'responsive_images',
			'develop'
		]
	},

	javascriptClient: {
		files: [
			'<%= package.directories.private.js %>/**/*.js'
		],
		tasks: [
			'browserify:dev',
			'develop'
		]
	},

	javascriptServer: {
		files: [
			'app.js',
			'<%= package.directories.app.controller %>/*.js',
			'<%= package.directories.app.models %>/*.js',
			'<%= package.directories.app.helpers %>/*.js',
			'config/*.js'
		],
		tasks: [
			'develop'
		]
	},

	sass: {
		files:   [
			'<%= package.directories.private.sass %>/**/*.scss'
		],
		tasks:   [
			'scsslint',
			'sass',
			'develop'
		]
	},

	views: {
		files:   [
			'<%= package.directories.app.views %>/*.handlebars',
			'<%= package.directories.app.views %>/**/*.handlebars'
		],
		tasks: [
			'develop',
			'string-replace'
		]
	},

	layout: {
		files: [
			'<%= package.directories.app.views %>/*layouts/main.handlebars'
		],
		tasks: [
			'string-replace'
		]
	}

};
