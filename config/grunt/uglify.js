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

	production: {
		options: {
			sourceMap:     true,
			sourceMapName: '<%= package.directories.public.js %>/sourcemap.map'
		},
		files:   {
			'<%= package.directories.public.js %>/main.min.js':    [
				'<%= package.directories.public.js %>/main.js'
			],
			'<%= package.directories.public.js %>/profile.min.js': [
				'<%= package.directories.public.js %>/profile.js'
			]
		}
	},

	critical: {
		options: {
			sourceMap: false
		},
		files:   {
			'<%= package.directories.public.js %>/critical.min.js': [
				'<%= package.directories.public.js %>/critical.js'
			]
		}
	}

};
