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

var config = require('../config'),
		port   = config.port;

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
		port:      port,
		ui:        {
			port: port + 1 || 4001
		}
	}

};
