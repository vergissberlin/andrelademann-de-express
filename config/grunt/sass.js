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
			style: 'expanded'
		},
		files:   {
			'<%= package.directories.public.css %>/admin.css': '<%= package.directories.private.sass %>/admin.scss',
			'<%= package.directories.public.css %>/style.css': '<%= package.directories.private.sass %>/style.scss'
		}
	}

};
