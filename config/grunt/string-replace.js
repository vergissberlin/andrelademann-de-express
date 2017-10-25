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
 * @link      https://www.npmjs.com/package/grunt-string-replace
 */
'use strict';

module.exports = {

	inline: {
		files:   {
			'app/views/layouts/main-critical.handlebars': 'app/views/layouts/main.handlebars'
		},
		options: {
			replacements: [
				{
					pattern:     '<style data-replace="fonts"></style>',
					replacement: "<style>.img-fluid{ max-width: 100%;height: auto;}body{font-family: \"Helvetica Neue\", open-sans, Arial, sans-serif; font-weight: 100}</style>"
				},
				{
					pattern:     '<style data-replace="critical"></style>',
					replacement: "<style><%= grunt.file.read('public/css/critical.min.css') %></style>"
				},
				{
					pattern:     '<script data-replace="critical"></script>',
					replacement: "<script><%= grunt.file.read('public/js/critical.min.js') %></script>"
				}
			]
		}
	}

};
