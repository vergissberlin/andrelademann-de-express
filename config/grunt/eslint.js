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

	// eslint
	server: {
		options: {
			configFile: "config/linter/.eslintrc-server.json"
		},
		src:     [
			'<%= package.directories.app.controllers %>**/*.js',
			'<%= package.directories.app.models %>**/*.js',
			'<%= package.directories.app.helpers %>**/*.js'
		]
	},

	client: {
		options: {
			configFile: "config/linter/.eslintrc-client.json"
		},
		src:     [
			'<%= package.directories.private.js %>**/*.js'
		]
	}

};
