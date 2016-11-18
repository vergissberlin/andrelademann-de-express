'use strict';

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

/**
 * git_changelog
 *
 * @type {{release: {options: {version: string, labels: string[], branch: string}}}}
 *
 * @return void
 */
module.exports = {

	manifest:         'package.json',
	changelog:        'CHANGELOG',
	history:          'CHANGELOG_HISTORY',
	changesSeparator: '\n*******************************************************' +
										'*****************************************************************\n',

	masks: [
		{
			title:  '\nImplemented\n',
			mask:   /(([^\.]+\s)*(Task|Add|Implement)(\s[^\.]+)*)/gim,
			format: '- #%h %an %ad: %s %b'
			// see http://git-scm.com/docs/git-log for mapping content,
		},
		{
			title:  '\nImprovements\n',
			mask:   /(([^\.]+\s)*(Improve|Enhance|Reduce)(\s[^\.]+)*)/gim,
			format: '- #%h %an %ad: %s %b'
		},
		{
			title:  '\nFixes\n',
			mask:   /(([^\.]+\s)*(Bug|Fix|Clean|Remove)(\s[^\.]+)*)/gim,
			format: '- #%h %an %ad: %s %b'
		},
		{
			title:  '\nRelease\n',
			mask:   /(([^\.]+\s)*(Release)(\s[^\.]+)*)/gim,
			format: '- #%h: %s %b'
		},
		{
			title:  '\nOthers\n',
			mask:   /./gim,
			format: '- #%h: %s %b'
		}
	]

};
