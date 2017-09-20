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

	server: {
		file: 'app.js',
		nodeArgs: ['--inspect'],
		env: { NODE_ENV: 'development'}
	},

	debug: {
		file:     'app.js',
		nodeArgs: ['--inspect-brk'],
		env:      {NODE_ENV: 'development'}
	}


};
