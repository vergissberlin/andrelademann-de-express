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

	prod: {
		options: {
			sizes: [
				{name: 'small', width: 320},
				{name: 'medium', width: 640},
				{name: 'large', width: 1024},
				{name: 'xlarge', width: 1200}
			]
		},
		files:   [
			{
				expand:      true,
				src:         ['**.{jpg,gif,png}'],
				cwd:         '<%= package.directories.private.img %>',
				custom_dest: '<%= package.directories.public.img %>/content/{%= width %}/'
			}
		]
	}

};
