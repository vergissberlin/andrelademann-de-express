/**
 * Grunt task configuration
 *
 * JavaScript ECMAScript 5.1
 *
 * @category  JavaScript
 * @package   AndreLademann\Homepage\Development
 * @project   AndreLademannDe
 * @author    André Lademann <info@andrelademann.de>
 * @copyright MIT
 * @license   https://opensource.org/licenses/MIT
 * @link      https://www.gnu.org/licenses/gpl.html
 */
'use strict';

module.exports = function (grunt) {
	var path = require('path');

	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'config/grunt'),
		init:       true,

		jitGrunt: {
			staticMappings: {
				availabletasks: 'grunt-available-tasks',
				bump:           'grunt-bump-skiphook',
				coverage:				'grunt-istanbul-coverage',
				sass:           'grunt-sass',
				scsslint:       'grunt-scss-lint'
			}
		},
		data:     {
			path: path
		}
	});

};
