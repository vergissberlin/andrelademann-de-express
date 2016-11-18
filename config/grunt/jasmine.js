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

	// BDD tests
	pivotal: {
		src:     '<%= package.directories.app.helpers %>/**/*.js',
		options: {
			specs:   '<%= package.directories.tests.spec %>/**/*Spec.js',
			helpers: '<%= package.directories.tests.spec %>/**/*Helper.js'
		}
	}
};
