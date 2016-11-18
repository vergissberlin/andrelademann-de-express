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
				'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css',
				'//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
				'//cdnjs.cloudflare.com/ajax/libs/tether/1.3.3/js/tether.min.js',
				'//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js'
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
