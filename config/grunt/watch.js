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

	// Watch file changes
	options: {
		nospawn:    true,
		livereload: 8484
	},

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
			'develop:server',
			'delayed-livereload'
		]
	},

	javascriptClient: {
		files: [
			'<%= package.directories.private.js %>/**/*.js'
		],
		tasks: [
			'jshint:dev',
			'browserify:dev'
		]
	},

	javascriptServer: {
		files: [
			'app.js',
			'<%= package.directories.app.controller %>/**/*.js',
			'<%= package.directories.app.models %>/**/*.js',
			'<%= package.directories.app.helpers %>/**/*.js',
			'config/*.js'
		],
		tasks: [
			'jshint',
			'develop',
			'delayed-livereload'
		]
	},

	sass: {
		options: {
			livereload: 8484
		},
		files:   [
			'<%= package.directories.private.sass %>/**/*.scss'
		],
		tasks:   [
			'sass',
			'csslint'
		]
	},

	views: {
		files:   [
			'<%= package.directories.app.views %>/*.handlebars',
			'<%= package.directories.app.views %>/**/*.handlebars'
		],
		options: {
			livereload: 8484
		}
	}

};
