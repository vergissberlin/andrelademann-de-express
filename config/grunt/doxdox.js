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
	'markdown':  {
		'inputs': [
			'app.js',
			'app/controllers/*.js',
			'app/models/*.js',
			'app/views/helpers/*.js'
		],
		'output': 'doc/index.md'
	},
	'bootstrap': {
		'inputs': [
			'app.js',
			'app/controllers/*.js',
			'app/models/*.js',
			'app/views/helpers/*.js'
		],
		'output': 'doc/index.html',
		'config': {
			'layout': 'bootstrap'
		}
	}
};
