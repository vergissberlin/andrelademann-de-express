/**
 * Convert HTML Selenium tests to JavaScript tests
 *
 * @project      AndreLademannDe
 * @author       André Lademann <info@andrelademann.de>
 * @copyright    MIT
 * @license      https://opensource.org/licenses/MIT
 */

var converter = require('selenium-html-js-converter');

converter.convertHtmlSuiteFileToJsFiles(
	'./test/acceptance/html/blog.html',
	'./test/acceptance/js/')
;
