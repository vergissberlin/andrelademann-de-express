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
	private: [
		'<%= package.directories.private.scss %>**/*.scss'
	],
	options: {
		config:               '.scss-lint.yml',
		failOnWarning:        false,
		reporterOutput:       '<%= package.directories.tests.reports %>/scss-lint-report.xml',
		reporterOutputFormat: 'xml',
		colorizeOutput:       true
	}
};
