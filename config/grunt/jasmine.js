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
		src:     '<%= package.directories.app.helpers %>*.js',
		options: {
			specs:    '<%= package.directories.tests.specs %>**/testSpec.js',
			helpers:  '<%= package.directories.tests.specs %>**/*Helper.js',
			template: require('grunt-template-jasmine-requirejs')
		}
	}
};
