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

	// Bump version
	options: {
		files:              [
			'package.json'
		],
		updateConfigs:      [],
		commit:             true,
		commitMessage:      'Release v%VERSION%',
		commitFiles:        ['package.json'],
		createTag:          true,
		tagName:            'v%VERSION%',
		tagMessage:         'Version %VERSION%',
		push:               true,
		pushTo:             'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d -n',
		globalReplace:      false,
		prereleaseName:     false,
		skipPrecommitHook:  true,
		metadata:           '',
		regExp:             false
	}

};
