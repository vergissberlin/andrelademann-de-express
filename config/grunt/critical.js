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
 * @link      https://www.npmjs.com/package/grunt-critical
 */
'use strict';

module.exports = {

	test: {
		options: {
			base:   './',
			css:    [
				'public/css/screen.css'
			],
			width:  320,
			height: 70
		},
		// src:     'https://localhost:3232',
		src:     'public/critical-test.html',
		dest:    'public/css/critical.css'
	}

};
