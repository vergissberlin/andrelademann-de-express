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

	// Manifest
	generate: {
		options: {
			basePath:     'public',
			cache:        [
				'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
				'//code.jquery.com/jquery-3.2.1.slim.min.js',
				'//cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
				'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js'
			],
			network:      ['http://*', 'https://*'],
			fallback:     ['/ /offline.html'],
			preferOnline: true,
			verbose:      false,
			timestamp:    true,
			settings:     {
				preferOnline: true
			}
		},
		src:     [
			'index.html',
			'css/*.css',
			'img/**/*.png',
			'js/*.min.js'
		],
		dest:    'public/manifest.appcache'
	}
};
