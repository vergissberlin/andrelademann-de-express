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

	bsFiles: {
		src: [
			'Resources/Public/Css/**/*.css',
			'Resources/Public/Icons/*',
			'Resources/Public/Images/*',
			'Resources/Public/JavaScript/**/*.js'
		]
	},
	options: {
		watchTask: true,
		proxy:     process.env.DEV_INITIALS + '.<%= package.project.url %>',
		port:      process.env.DEV_BROWSERSYNC_PORT || 3000,
		ui:        {
			port: parseInt(process.env.DEV_BROWSERSYNC_PORT) + 1 || 3001
		}
	}

};
