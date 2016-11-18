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

	// Collect code coverage
	default: {
		options: {
			thresholds: {
				'statements': 90,
				'branches':   90,
				'lines':      90,
				'functions':  90
			},
			dir:        'app',
			root:       'test'
		}
	}


};
