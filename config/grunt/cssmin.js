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

	// Compression css
	files: [
		{
			expand: true,
			cwd:    '<%= package.directories.public.css %>',
			src:    '*.css',
			dest:   '<%= package.directories.public.css %>'
		}
	]

};
