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

	// SASS API documentation
	files: {
		src:     ['<%= package.directories.private.sass %>/**/*.scss'],
		options: {
			package:         this.package,
			dest:            '<%= package.directories.public.doc %>/Sass',
			descriptionPath: './README.md',
			display:         {
				access:    ['public', 'private'],
				alias:     true,
				watermark: true
			},
			groups:          {
				basic:       'Basics',
				helpers:     'Helpers',
				'undefined': 'Ungrouped'
			}
		}
	}
};
