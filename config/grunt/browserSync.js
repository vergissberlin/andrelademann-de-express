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

	bsFiles: {
		src: [
			'<%= package.directories.public.css %>/**/*.css',
			'<%= package.directories.public.img %>/*',
			'<%= package.directories.public.js %>/**/*.js'
		]
	},
	options: {
		watchTask: true,
		proxy:     '<%= package.project.url %>',
		port:      4000,
		ui:        {
			port: parseInt(process.env.DEV_BROWSERSYNC_PORT) + 1 || 4001
		}
	}

};
