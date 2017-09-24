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

	// API documentation
	dist: {
		src:     [
			'app.js',
			'app/**/*.js',
			'<%= package.directories.private.js %>/**/*.js'
		],
		options: {
			destination: '<%= package.directories.public.doc %>/JavaScript'
		}

	}
};
