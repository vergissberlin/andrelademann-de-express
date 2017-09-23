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
 * @see       https://www.npmjs.com/package/grunt-git-changelog
 */

/**
 * git_changelog
 *
 * @type {{release: {options: {version: string, labels: string[], branch: string}}}}
 * @see http://git-scm.com/docs/git-log for mapping content
 * @return void
 */
module.exports = {

	manifest:         'package.json',
	changelog:        'CHANGELOG.md',
	history:          'HISTORY.md',
	changesSeparator: '---------------------------------------------------------\n\n',

	masks: [
		{
			title:  '\n\n## Implemented\n\n',
			mask:   /(([^\.]+\s)*(Task|Add|Implement)(\s[^\.]+)*)/gim,
			format: '- %h %an %ad: %s %b'
		},
		{
			title:  '\n## Improvements\n',
			mask:   /(([^\.]+\s)*(Improve|Enhance|Reduce)(\s[^\.]+)*)/gim,
			format: '- %h %an %ad: %s %b'
		},
		{
			title:  '\n## Fixes\n',
			mask:   /(([^\.]+\s)*(Bug|Fix|Clean|Remove)(\s[^\.]+)*)/gim,
			format: '- %h %an %ad: %s %b'
		},
		{
			title:  '\n## Release\n',
			mask:   /(([^\.]+\s)*(Release)(\s[^\.]+)*)/gim,
			format: '- %h: %s %b'
		},
		{
			title:  '\n## Others\n',
			mask:   /./gim,
			format: '- %h: %s %b'
		}
	]

};
