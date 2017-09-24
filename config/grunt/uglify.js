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

	all: {
		options: {
			sourceMap: true,
			sourceMapName: '<%= package.directories.public.js %>/sourcemap.map'
		},
		files: {
			'<%= package.directories.public.js %>/main.min.js': [
				'<%= package.directories.public.js %>/main.js'
			]
		}
	}

};
