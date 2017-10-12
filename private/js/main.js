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

$(function () {
	$.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
		$('main .img-fluid').lazyload({});
		alert('load');
	});
});
